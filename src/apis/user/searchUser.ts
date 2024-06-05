import {instance, noTokenInstance} from '../axiosInstance';

export async function searchUser(filters:any){
    const queryString = new URLSearchParams({
        ...(filters.age && filters.age.length === 2 ? { age: filters.age.join('-') } : {}),
        ...(filters.sex && filters.sex.length === 1 ? { sex: filters.sex.join(',') } : {}),
        ...(filters.category && filters.category.length > 0 ? { category: filters.category.join(',') } : {}),
        ...(filters.name && filters.name.trim() !== '' ? { name: filters.name } : {}),
        ...(filters.location && filters.location.trim() !== '' ? { location: filters.location } : {}),
        ...(filters.role && filters.role.trim() !== '' ? { role: filters.role } : {})
    }).toString();

    try{
        const response = await noTokenInstance.get(`/user/searchUsers?${queryString}`);

        return response.data;
    }catch(error){
        throw error;
    }
}
