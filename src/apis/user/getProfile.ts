import {instance} from '../axiosInstance';

export async function getUserInfo(uid?: string): Promise<any> {
    const luid = localStorage.getItem('uid');
    const suid = JSON.parse(luid!);
    let quid;
    if (!uid) {
        quid = suid;
    } else {
        quid = uid;
    };
    try{
        const response = await instance.post('/user/getUserInfo',{uid:quid});
        return response;
    }catch(error){
        throw error;
    }
}
