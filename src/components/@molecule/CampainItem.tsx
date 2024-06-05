import React from 'react';
import { Button } from '@mui/material';
import { Image } from '../@atoms';
import { useNavigate } from 'react-router-dom';

interface CampainMainDTO {
    campainId: string;
    thumbnail: string;
    title: string;
    reward: string;
    startDate: string;
    endDate: string;
    onClick: () => void;
}

export default function CampainItem(props: CampainMainDTO) {
    const { campainId, thumbnail, title, reward, startDate, endDate, onClick } =
        props;

    const navigate = useNavigate();

    const onClickItem = () => {
        console.log('id', campainId);
        onClick();
        navigate('/campainDetail');
        // 임시 상세 페이지 이동 정의
    };

    return (
        <Button
            style={{ display: 'flex', flexDirection: 'column' }}
            onClick={onClickItem}
        >
            <Image src={thumbnail} alt="테스트용" />
            <span>{title}</span>
            <span>{reward}</span>
            <span>{startDate}</span>
            <span>{endDate}</span>
            {/* <span>{startDate.toDateString()}</span>
            <span>{endDate.toDateString()}</span> */}
        </Button>
    );
}
