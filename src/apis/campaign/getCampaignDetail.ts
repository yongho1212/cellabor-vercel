import {instance} from '../axiosInstance';

export async function getCampaignDetail(_id?: string): Promise<any> {
    try{
        const response = await instance.post('/campaign/getCampaignDetail',{_id:_id});
        return response;
    }catch(error){
        throw error;
    }
}
