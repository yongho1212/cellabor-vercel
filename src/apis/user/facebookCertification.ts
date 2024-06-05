import {instance} from '../axiosInstance';

export async function facebookCertification(data:any){
    const luid = localStorage.getItem('uid');
    const uid = JSON.parse(luid!);
    const newData = { uid, data};
    try{
        const response = await instance.post('/user/facebookCertification', newData);
        return response;
    }catch(error){
        throw error;
    }
}
