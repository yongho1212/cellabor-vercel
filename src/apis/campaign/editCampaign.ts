import { instance } from '../axiosInstance';

export async function editCampaign(data: any) {
    // 404 발생중...
    const luid = localStorage.getItem('uid');
    const uid = JSON.parse(luid!);
    const newData = { ...data, userId: uid };
    console.log('check33', newData);
    try {
        const response = await instance.post(
            '/campaign/updateCampaign',
            newData
        );
        return response;
    } catch (error) {
        throw error;
    }
}
