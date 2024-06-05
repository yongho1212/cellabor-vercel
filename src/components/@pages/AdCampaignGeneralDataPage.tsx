// @flow
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

type Props = {

};

const DataMainBox = () => {
    return (
        <BoxContainer>
            Box
        </BoxContainer>
        );
};

const BoxContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdCampaignGeneralDataPage = (props: Props) => {
    return (
        <PageContainer>
            <DataMainBox />

        </PageContainer>
    );
};

export default AdCampaignGeneralDataPage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
