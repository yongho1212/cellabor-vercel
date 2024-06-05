import { useState } from 'react';
import AWS from 'aws-sdk';

const uid = JSON.stringify(localStorage.getItem('uid'));

const useS3Upload = () => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState<string>('');

        const uploadToS3 = async (file: File, folderName: string) => {
        const REGION = process.env.REACT_APP_S3_REGION;
        const ACCESS_KEY_ID = process.env.REACT_APP_S3_ACCESS_KEY_ID;
        const SECRET_ACCESS_KEY_ID = process.env.REACT_APP_S3_SECRET_ACCESS_KEY;



        AWS.config.update({
            region: REGION,
            accessKeyId: ACCESS_KEY_ID,
            secretAccessKey: SECRET_ACCESS_KEY_ID,
        });

        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: 'cellabor-img',
                Key: `${folderName}/${uid}/${file.name}`,
                Body: file,
            },
        });

        setLoading(true);

        try {
            const response = await upload.promise();
            console.log(response, 'response from custom hook');
            setUrl(response.Location);
        } catch (error) {
            console.error('S3 업로드 중 오류 발생:', error);
        } finally {
            setLoading(false);
        }
    };

    return { uploadToS3, loading, url };
};

export default useS3Upload;
