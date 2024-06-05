// @flow
import React, { useState, useEffect, createContext, useContext } from 'react';
import Layout from '../@layouts/Layout';
import styled from 'styled-components';
import { postCampaign } from '../../apis/campaign/postCampaign';
import { UplaodImage } from '../@molecule';
import PostCampaign from '../@organism/PostCampaign';
import { Button } from '../@atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { postCampaignState } from '../../states/postCampaign/atoms/postCampaignState';
import imageUploadS3 from '../../utils/imageUploadS3';

type Props = {};

const PostCampaignPage = (props: Props) => {
    const [postInfo, setPostInfo] = useRecoilState(postCampaignState);
    const resetPostInfo = useResetRecoilState(postCampaignState);

    async function handlePostCampaign() {
        await postCampaign(postInfo);
    }

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col  w-4/5 gap-4 my-10">
                <UplaodImage />
                <PostCampaign />
                <Button onClick={() => handlePostCampaign()}>submit</Button>
            </div>
        </div>
    );
};

export default PostCampaignPage;
