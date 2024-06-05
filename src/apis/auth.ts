import {instance, noTokenInstance} from './axiosInstance';
import {useQuery} from '@tanstack/react-query';

import {SignupParamsType, LoginParamsType} from '../types/auth.types';


const requestLogin = (params: LoginParamsType)  => {
    return noTokenInstance.post('/auth/login', params);
};

export const useRequestLogin = (params:LoginParamsType) => {
    const queryKey = ['login'];

    const { data, isLoading, error } = useQuery({
        staleTime: 5000,
        queryKey: [queryKey],
        queryFn: async () => requestLogin(params)
    });

    return { data, isLoading, error };
};

export const requestSignup = async (params: SignupParamsType) => {
    try {
        const response = await noTokenInstance.post('/auth/signup', params);
        return response;
    } catch (error) {
        return error;
    }
};

