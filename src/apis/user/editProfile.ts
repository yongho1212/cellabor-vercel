import {instance} from '../axiosInstance';

export async function editProfile(data:any){
    const luid = localStorage.getItem('uid');
    const uid = JSON.parse(luid!);
    const newData = {...data, uid};
    try{
        const response = await instance.post('/user/editProfile',newData);
        return response;
    }catch(error){
        throw error;
    }
}
