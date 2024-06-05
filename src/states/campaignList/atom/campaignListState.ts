import { atom } from 'recoil';

export const campaignListState = atom({
    key: 'campaignListState',
    default: [
        {
            _id: '',
            userId: '',
            title: '',
            description: '',
            sex: '',
            startAge: 0,
            endAge: 0,
            creationDate: '2024-01-01',
            modificationDate: '2024-01-01',
            category: '',
            startDate: '2024-01-01',
            endDate: '2024-01-01',
            reward: '',
            link: '',
            imageURL: '',
            isTemporary: false,
        },
    ],
});
