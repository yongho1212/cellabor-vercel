import { instance } from '../axiosInstance';

export async function searchADCampaigns(filters: any) {
    const luid = localStorage.getItem('uid');
    const userId = JSON.parse(luid!);
    const newData = { userId, ...filters };
    const queryString = new URLSearchParams({
        // ...(userId ? { userId: userId } : {}),
        ...(filters.sex && filters.sex.length === 1 ? { sex: filters.sex.join(',') } : {}),
        ...(filters.category && filters.category.length > 0 ? { category: filters.category.join(',') } : {}),
        ...(filters.title && filters.title.trim() !== '' ? { title: filters.title } : {}),
    }).toString();
    try {
        const response = await instance.get(`/campaign/searchADCampaigns?${queryString}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
