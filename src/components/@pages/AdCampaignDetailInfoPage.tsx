// @flow
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import TabView from '../@molecule/TabView';

type Props = {

};

// 임시 컴포넌트
const ExContent = () => {
    return (
        <div>
            ExContent
        </div>
    );
};

const AdCampaignDetailInfoPage = (props: Props) => {
    const {id} = useParams();
    const tabs = [
        { id: 'tab1', label: '탭 1', content: '탭 1의 컨텐츠입니다.' },
        { id: 'tab2', label: '탭 2', content: '탭 2의 컨텐츠입니다.' },
        { id: 'tab3', label: '탭 3', content: <ExContent/> },
    ];

    return (
        <PageContainer>
            {id}
            AdCampaignDetailInfoPage
            <TabView tabs={tabs} />
        </PageContainer>
    );
};

export default AdCampaignDetailInfoPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
