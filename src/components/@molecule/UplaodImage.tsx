// @flow
import React, { useState, useEffect } from 'react';
import { Image } from '../@atoms';
import styled from 'styled-components';
// import useS3Upload from '../../hooks/useS3Upload';
import { useUserMutation, useUserQuery } from '../../services/userQueries';

import { useRecoilState } from 'recoil';
import { postCampaignState } from '../../states/postCampaign/atoms/postCampaignState';
import imageUploadS3 from '../../utils/imageUploadS3';
import { FaRegEdit } from 'react-icons/fa';
import Skeleton from '@mui/material/Skeleton';
import useS3Upload from '../../hooks/useS3Upload';

type Props = {};
const UplaodImage = (props: Props) => {
    const [tempImageUrl, setTempImageUrl] = useState('');
    const [postInfo, setPostInfo] = useRecoilState(postCampaignState);
    console.log(postInfo);
    const mutation = useUserMutation();
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const { uploadToS3, loading, url } = useS3Upload();

    useEffect(() => {
        if (postInfo) {
            setPostInfo(prevState => ({ ...prevState, imageUrl: url }));
        }
    }, [url]);
    useEffect(() => {
        console.log(url);
        if (url){
            mutation.mutate({profileImg: url});
        }
    }, [url]);

    function editImage() {
        console.log('image');
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    async function saveImg() {
        if (fileInputRef?.current?.files) {
            const file = fileInputRef.current.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.result !== null) {
                    setTempImageUrl(reader.result as string);
                }
            };

            reader.readAsDataURL(file);
            await uploadToS3(file, 'campaign');
            setPostInfo({ ...postInfo, imageURL: url });
        }
    }

    return (
        <>
            <div className="mb-4 w-48 h-48 m-auto relative">
                <FaRegEdit
                    size={20}
                    style={{ position: 'absolute', right: 0, top: 0 }}
                    onClick={editImage}
                />
                <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={saveImg}
                />
                <img
                    src={'https://placehold.co/800'}
                    alt="Profile"
                    className="rounded-full w-48 h-48 mx-auto"
                />
            </div>
            {/* <ImageWrapper>
                <Image
                    src={
                        url ||
                        'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20221103101952_0bb4987ddee4c5fe184921c930a802f8.jpg'
                    }
                    alt={'프로필'}
                    width={'100%'}
                    height={'100%'}
                    role={'ad'}
                />
                <input type="file" accept="image/*" onChange={handleUpload} />
            </ImageWrapper> */}
        </>
    );
};

export default UplaodImage;

const ImageWrapper = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    //padding-bottom: 100%;
`;
