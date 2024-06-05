import { instance } from '../axiosInstance';

export async function deleteCampaign(data: any) {
    const newData = { ...data };
    console.log('check44', newData);
    try {
        const response = await instance.post(
            '/campaign/deleteCampaign',
            newData
        );
        return response;
    } catch (error) {
        throw error;
    }
}
