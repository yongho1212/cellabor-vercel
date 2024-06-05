import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {getUserInfo} from '../apis/user/getProfile';
import {editProfile} from '../apis/user/editProfile';
import {UserType} from '../types/infuser.types';

export const useUserQuery = (userId?:string) => {
    const {
        isLoading,
        isError,
        data,
        isSuccess
    } = useQuery({
        queryKey: ['user'],
        queryFn: () =>  getUserInfo(userId),

    });

    return {isLoading, isError, data, isSuccess};
};

type UserPostType = {

}

export const useUserMutation = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (data:any) => editProfile(data),
        onSuccess: () => {
            console.log('success');
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: () => {console.log('err');},
        onSettled: () => {console.log('settled'); },
    });
    return mutation;
};
