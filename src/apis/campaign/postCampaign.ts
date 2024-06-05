import { instance } from '../axiosInstance';

export async function postCampaign(data: any) {
    const luid = localStorage.getItem('uid');
    const userId = JSON.parse(luid!);
    const newData = { userId, ...data };
    try {
        const response = await instance.post('/campaign/postCampaign', newData);
        return response;
    } catch (error) {
        throw error;
    }
}
