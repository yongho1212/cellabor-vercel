import { instance, noTokenInstance } from '../axiosInstance';

export async function searchCampaignList(filters: any) {
    const queryString = new URLSearchParams({
        ...(filters.reward && filters.reward.length === 2 ? { reward: filters.reward.join('-') } : {}),
        ...(filters.sex && filters.sex.length === 1 ? { sex: filters.sex.join(',') } : {}),
        ...(filters.category && filters.category.length > 0 ? { category: filters.category.join(',') } : {}),
        ...(filters.title && filters.title.trim() !== '' ? { title: filters.title } : {}),
    }).toString();
    
    if (queryString.length > 0) {
        try {
            const response = await instance.get(`/campaign/searchCampaigns?${queryString}`);
            return response;
        } catch (error) {
            throw error;
        }
    }
    try {
        const response = await instance.get('/campaign/getCampaignList');
        return response;
    } catch (error) {
        throw error;
    }
}
