import React, {useEffect, useRef, useState} from 'react';
import { Button } from '../@atoms';

interface ScrollTextBoxDTO {
    boxIdx: number;
    value: string;
    ButtonText: string;
}

export default function CampainDetailIntroduction() {
    // 썸네일을 포함한 간략한 소개글 및 문의 신청 org

    const input: ScrollTextBoxDTO[] = [
        {
            boxIdx: 0,
            value: '광고 설명, 서비스 설명',
            ButtonText: '광고 설명, 서비스 설명',
        },
        {
            boxIdx: 1,
            value: '단가, 가격정보',
            ButtonText: '단가, 가격정보',
        },
        {
            boxIdx: 2,
            value: '수정 문의사항',
            ButtonText: '수정 문의사항',
        },
        {
            boxIdx: 3,
            value: '정자동에 있는 라떼 전문 카페 협찬 광고입니다',
            ButtonText: '타이틀',
        },
        {
            boxIdx: 4,
            value: '더 카페는 최고의 경쟁력으로 커피 시장의 트랜드를 주도합니다.',
            ButtonText: '설명',
        },
        {
            boxIdx: 5,
            value: '사진 몇장, 어디서 어떤 제품 촬영',
            ButtonText: '미션',
        },
        {
            boxIdx: 6,
            value: '6',
            ButtonText: '6번',
        },
        {
            boxIdx: 7,
            value: '7',
            ButtonText: '7번',
        },
        {
            boxIdx: 8,
            value: '8',
            ButtonText: '8번',
        },
        {
            boxIdx: 9,
            value: '9',
            ButtonText: '9번',
        },
        {
            boxIdx: 10,
            value: '10',
            ButtonText: '10번',
        },
    ];

    // const inputRefs: React.RefObject<HTMLDivElement>[] = Array.from(
    //     { length: input.length },
    //     () => useRef(null)
    // );

    const [inputRefs, setInputRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.
        // input.length 길이의 배열을 생성하고 각 요소를 useRef로 초기화합니다.
        setInputRefs(Array.from({ length: input.length }, () => React.createRef()));
    }, [input.length]); // 의존성 배열에 input.length를 추가하여 input 배열의 길이가 변경될 때만 실행되도록 합니다.

    // 특정 input 요소로 스크롤하는 함수
    const scrollToInput = (index: number) => {
        const nowItem = inputRefs[index];
        if (nowItem && nowItem.current) {
            nowItem.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <div
                className="buttons"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {input.map((item, index) => (
                    <Button
                        onClick={() => scrollToInput(index)}
                        width={'100px'}
                        height={'80px'}
                        style={{ marginBottom: '20px' }}
                    >
                        {item.ButtonText}
                    </Button>
                ))}
            </div>
            <div
                className="values"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'scroll',
                    border: '1px solid black',
                }}
            >
                {inputRefs.map((inputRef, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <div
                            ref={inputRef}
                            // 이거 뭐여 !
                            // placeholder={`Input Box ${index + 1}`}
                            // style={{ height: '300px' }}
                        >
                            {input[index].value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
