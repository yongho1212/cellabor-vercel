// @flow
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Image} from '../@atoms';

type Props = {
    campaignList: Array<any>;
    advertiserData: any;
};



const WorkSpaceSidebar = ({advertiserData, campaignList}: Props) => {
    console.log(campaignList, advertiserData);

    return (
        <SideBarContainer>
            <Link to={'/workspace'}>
                <SideBarHeader>
                    <Image src={advertiserData.img} alt={advertiserData.name} role={'inf'} height={'200px'} width={'200px'}/>
                    {advertiserData.name}
                </SideBarHeader>
            </Link>
            {campaignList.map((campaign) => (
                <Link key={campaign.id} to={`/workspace/detail/${campaign.id}`}>
                    <CampaignItem>
                        <Image src={campaign.img} alt={campaign.name} role={'inf'} height={'200px'} width={'200px'}/>
                        {campaign.name}
                    </CampaignItem>
                </Link>
            ))}

        </SideBarContainer>
    );
};

export default WorkSpaceSidebar;

const SideBarContainer = styled.div`
    width: 232px;
    background-color: darkgrey;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const SideBarHeader = styled.div`
  height: 300px;
`;

const CampaignItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
      background-color: white;
      align-items: center;
`;
