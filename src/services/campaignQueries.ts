import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCampaignDetail } from '../apis/campaign/getCampaignDetail';
import { editCampaign } from '../apis/campaign/editCampaign';
import { deleteCampaign } from '../apis/campaign/deleteCampaign';

export const usecampaignQueries = (id?: string) => {
    console.log('id', id);
    const { isLoading, isError, data, isSuccess } = useQuery({
        queryKey: ['campaign'],
        queryFn: () => getCampaignDetail(id),
    });

    return { isLoading, isError, data, isSuccess };
};

export const useCampaignMutation = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (data: any) => editCampaign(data),
        onSuccess: () => {
            console.log('success');
            queryClient.invalidateQueries({ queryKey: ['campaign'] });
        },
        onError: () => {
            console.log('err');
        },
        onSettled: () => {
            console.log('settled');
        },
    });
    return mutation;
};

export const useCampaignDelete = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (data: any) => deleteCampaign(data),
        onSuccess: () => {
            console.log('success');
            queryClient.invalidateQueries({ queryKey: ['campaign'] });
        },
        onError: () => {
            console.log('err');
        },
        onSettled: () => {
            console.log('settled');
        },
    });
    return mutation;
};
