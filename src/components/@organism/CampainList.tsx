import React from 'react';
import CampainItem from '../@molecule/CampainItem';
import { searchCampaignList } from '../../apis/campaign/searchCampaignList';
import { useRecoilState } from 'recoil';
import { campaignListState } from '../../states/campaignList/atom/campaignListState';

export default function CampainList() {
    const [campaignList, setCampaignList] = useRecoilState(campaignListState);

    const dataLoading = async () => {
        try {
            const response = await searchCampaignList({});
            if (response.status === 200) {
                console.log('data', response.data);
                setCampaignList(response.data.campaignList); // .data를 사용하여 실제 데이터에 접근
            } else {
                console.error(
                    'Failed to fetch campaign list:',
                    response.status
                );
            }
        } catch (error) {
            console.error('Error fetching campaign data:', error);
        }
    };

    React.useEffect(() => {
        dataLoading();
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {campaignList &&
                campaignList.map((item, index) => {
                    return (
                        <CampainItem
                            key={item._id}
                            campainId={item._id}
                            thumbnail={item.imageURL}
                            title={item.title}
                            reward={item.reward}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            onClick={() => {
                                console.log('사용자 클릭');
                            }}
                        />
                    );
                })}
        </div>
    );
}
