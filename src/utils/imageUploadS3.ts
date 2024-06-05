import AWS from 'aws-sdk';

// S3 키값들
const ACCESS_KEY_ID = process.env.REACT_APP_S3_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_S3_SECRET_ACCESS_KEY;
const BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_S3_REGION;

const userId = localStorage.getItem('uid');

AWS.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
});

const S3Bucket = new AWS.S3({
    params: { Bucket: BUCKET },
    region: REGION,
});

type S3Props = {
    file: File;

    dir: 'user' | 'campaign';
};

export default async function imageUploadS3({ file, dir }: S3Props) {
    console.log('upload s3');
    const param = {
        ACL: 'public-read',
        ContentType: 'image/jpeg',
        Body: file,
        Bucket: BUCKET || '',
        Key: `${userId}/${dir}/${file.name}`,
    };

    return new Promise((resolve, reject) => {
        S3Bucket.putObject(param, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // URL을 생성하는 방법도 수정할 필요가 있습니다.
                S3Bucket.getSignedUrl(
                    'getObject',
                    { Bucket: BUCKET, Key: param.Key },
                    (err, url) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(url);
                        }
                    }
                );
            }
        });
    });
}
