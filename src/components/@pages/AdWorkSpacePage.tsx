// @flow
import React, {useState, useEffect} from 'react';
import {Link, Outlet} from 'react-router-dom';
import Layout from '../@layouts/Layout';
import styled from 'styled-components';
import { searchADCampaigns } from '../../apis/campaign/searchADCampaigns';
import firebase from 'firebase/compat';
import {calculateAge} from '../../utils/getAge';
import {useUserMutation, useUserQuery} from '../../services/userQueries';
import {UserType} from '../../types/infuser.types';
import Skeleton from '@mui/material/Skeleton';
import FacebookLoginbutton from '../@molecule/FacebookCertificateButton';
import {FaRegEdit} from 'react-icons/fa';
import imageUploadS3 from '../../utils/imageUploadS3';
import useS3Upload from '../../hooks/useS3Upload';
import FilterItem from '../@molecule/FilterItem';
import { useRecoilState } from 'recoil';
import { campaignListState } from '../../states/campaignList/atom/campaignListState';
import ListingItem from './ListingItem';
import WorkSpaceSidebar from '../@organism/WorkSpaceSidebar';
import ADWorkspaceSearchbar from '../@organism/ADWorkspaceSearchbar';

type Props = {

};


const AdWorkSpacePage = (props: Props) => {
    const [campaignList, setCampaignList] = useRecoilState(campaignListState);
    const mutation = useUserMutation();

    const handleDataFromChild = (data:any) => {
        setCampaignList(data);
    };

    const dataLoading = async () => {
        try {
            const response = await searchADCampaigns({});
            console.log('check', response);
            if (response) {
                console.log('data', response);
                setCampaignList(response); // .data를 사용하여 실제 데이터에 접근
            } else {
                console.error(
                    'Failed to fetch campaign list:'
                );
            }
        } catch (error) {
            console.error('Error fetching campaign data:', error);
        }
    };

    React.useEffect(() => {
        dataLoading();
    }, []);

    console.log('data2222', campaignList);

    return (
        <Layout $isfull={true}>
            {/* <WorkSpaceSidebar advertiserData={advertiserData} campaignList={campaignList}/> */}
            
            
                            <>
                                <div style={{ display: 'flex', flexDirection: 'column'}}>
                                    <span className='workspace-header' style={{color: '#222222', fontSize: '2rem', fontWeight: '600'}}>광고주 님, 반갑습니다!</span>
                                    <div style={{ padding: '64px 0px'}}>
                                        <span className='workspace-subtitle' style={{height: '45px', color: '#222222', fontSize: '1.625rem', fontWeight: '600'}}>나의 광고</span>
                                        <ADWorkspaceSearchbar forwardFilter={handleDataFromChild}/>
                                        <div className='workspace-filters' style={{ display: 'flex', gap: '8px', margin: '30px 0px' }}>
                                            <FilterItem
                                                onClick={() => {
                                                    console.log('필터 1으로 정렬');
                                                }}
                                            >
                                                필터 1
                                            </FilterItem>
                                            <FilterItem
                                                onClick={() => {
                                                    console.log('필터 2으로 정렬');
                                                }}
                                            >
                                                필터 2
                                            </FilterItem>
                                            <FilterItem
                                                onClick={() => {
                                                    console.log('필터 3으로 정렬');
                                                }}
                                            >
                                                필터 3
                                            </FilterItem>
                                        </div>
                                        <div className='listing-grid' style={{ display: 'flex', flexWrap: 'wrap'}}>
                                            {campaignList && campaignList.map((listing, index) => (
                                                <ListingItem
                                                    id={listing._id}
                                                    key={listing._id}
                                                    title={listing.title}
                                                    category={listing.category}
                                                    startDate={listing.startDate}
                                                    endDate={listing.endDate}
                                                    reward={listing.reward}
                                                    imageURL={listing.imageURL}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                            {/* :
                            <>
                                <Skeleton variant="text" sx={{fontSize: '1.3rem'}}/>
                                <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                            </> */}
                        
            {/* <Outlet /> */}
        </Layout>
    );
};

export default AdWorkSpacePage;
