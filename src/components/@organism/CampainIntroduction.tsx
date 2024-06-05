import React from 'react';
import CampainFilter from '../@organism/CampainFilter';
import CampainList from '../@organism/CampainList';
import { Image } from '../@atoms';
import { Button } from '../@atoms';

interface CampainDetailDTO {
    campainId: number;
    thumbnail: string;
    images: string[];
    title: string;
    reward: string;
    explanation: string;
    mission: string;
    registrationDate: Date;
    modifiedDate: Date;
    applicationPeriod: Date; // 언제 부터 언제 까지로 표기되어야 함 변경되어야 할듯, 아니면 서버에서 시간 스트링으로 받던지
    announcementDate: Date;
    contentRegistrationDate: Date; // 언제 부터 언제 까지로 표기되어야 함 변경되어야 할듯
    startDate: Date;
    endDate: Date;
    announcementResultDate: Date;
    isParticipation: boolean;
    // relatedCampains: Todo;
}

export default function CampainIntroduction() {
    // 썸네일을 포함한 간략한 소개글 및 문의 신청 org

    const testData: CampainDetailDTO = {
        campainId: 1,
        thumbnail: '아직은 이미지가 없다',
        images: ['not', 'yet', 'It', 'is', 'todo'],
        title: '정자동에 있는 라떼 전문 카페 협찬 광고입니다',
        reward: '500억',
        explanation:
            '더 카페는 최고의 경쟁력으로 커피 시장의 트랜드를 주도합니다.',
        mission: '사진 몇장, 어디서 어떤 제품 촬영',
        registrationDate: new Date(),
        modifiedDate: new Date(),
        applicationPeriod: new Date(), // 언제 부터 언제 까지로 표기되어야 함 변경되어야 할듯, 아니면 서버에서 시간 스트링으로 받던지
        announcementDate: new Date(),
        contentRegistrationDate: new Date(),
        startDate: new Date(),
        endDate: new Date(),
        announcementResultDate: new Date(),
        isParticipation: false,
    };

    return (
        <div style={{ display: 'flex' }}>
            <Image src={testData.thumbnail} alt="테스트용" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{testData.title}</span>
                <span>{testData.reward}</span>
                <span>{testData.explanation}</span>
                <span>{testData.mission}</span>
                <span>{testData.registrationDate.toDateString()}</span>
                <span>{testData.modifiedDate.toDateString()}</span>
                <span>{testData.applicationPeriod.toDateString()}</span>
                <span>{testData.announcementDate.toDateString()}</span>
                <span>{testData.contentRegistrationDate.toDateString()}</span>
                <span>{testData.startDate.toDateString()}</span>
                <span>{testData.endDate.toDateString()}</span>
                <span>{testData.announcementResultDate.toDateString()}</span>
                <Button
                    onClick={() => {
                        console.log('문의 서비스 연동 예정');
                    }}
                >
                    문의하기
                </Button>
                <Button
                    onClick={() => {
                        console.log('신청 서비스 연동 예정');
                    }}
                >
                    신청하기
                </Button>
            </div>
        </div>
    );
}
