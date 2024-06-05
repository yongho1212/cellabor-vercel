import React, { useState } from 'react';
import TextInputWithLabel from '../@molecule/TextInputWithLabel';
import { Map } from '../@molecule';
import { NumberInput } from '../@molecule/NumberInput';
import { Input, Spacer, Text } from '../@atoms';
import { Container as MapDiv, useNavermaps } from 'react-naver-maps';
import useGeocoding from '../../hooks/useGeocoding';
import DateInput from '../@molecule/DateInput';

import { postCampaignState } from '../../states/postCampaign/atoms/postCampaignState';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import RadioButtonWithLessItems from '../@molecule/RadioButtonWithLessItems';
import RadioButtonWithManyItems from '../@molecule/RadionButtonWithManyItems';
import RangeSlider from '../@molecule/RangeSlider';

type PostInfo = {
    title: string;
    contents: string;
    min_price: number;
    max_price: number;
    reward: string;
    birthdate: Date | null;
};

type TextAreaUiData = {
    [K in 'title' | 'contents']: {
        label: string;
        height?: number;
    };
} & { [key: string]: any };

const addrress = '불정로 195';

const PostCampaign = () => {
    const [postInfo, setPostInfo] = useRecoilState(postCampaignState);
    console.log(postInfo);

    const coordinate = useGeocoding(addrress);

    const inputUiData: TextAreaUiData = {
        title: { label: '제목', height: 80 },
        contents: { label: '내용', height: 230 },
    };
    const handleInputChange = (
        key: string,
        newValue: string | number | Date
    ) => {
        setPostInfo((prevState) => ({ ...prevState, [key]: newValue }));
    };
    // const handleCheckboxChange = (field: 'sex' | 'age', key: string, newValue: boolean) => {
    //     setPostInfo(prevState => ({
    //         ...prevState,
    //         [field]: {
    //             ...prevState[field],
    //             [key]: newValue
    //         }
    //     }));
    // };
    const handleRangeSliderChange = (
        newValue: number[],
        newSelected: boolean
    ) => {
        setPostInfo((prevState) => ({
            ...prevState,
            age: {
                selected: newSelected,
                range: newValue,
            },
        }));
    };

    return (
        <div>
            {Object.entries(inputUiData).map(([field, { label, height }]) => (
                <TextInputWithLabel
                    key={field}
                    label={label}
                    contents={postInfo[field as 'title' | 'description']}
                    onContentsChange={(newValue) =>
                        handleInputChange(
                            field as 'title' | 'contents',
                            newValue
                        )
                    }
                    height={height}
                />
            ))}

            {/* <NumberInput
                minValue={postInfo.min_price}
                maxValue={postInfo.max_price}
                onMinChange={(newValue) => handleInputChange('min_price', newValue)}
                onMaxChange={(newValue) => handleInputChange('max_price', newValue)}
            >
                <NumberInput.Label>가격 범위</NumberInput.Label>
                <NumberInput.Button>제출</NumberInput.Button>
            </NumberInput> */}
            <Spacer height={10} />
            <Input
                value={postInfo.reward}
                placeholder={'보상을 입력해주세요'}
                onChange={(newValue) => handleInputChange('reward', newValue)}
                type={'text'}
            />
            <Text type={'body3'}>모집 기간</Text>
            <PeriodContainer>
                <DateInput
                    onChange={(newValue: Date) =>
                        handleInputChange('recruitmentStartDate', newValue)
                    }
                />
                ~
                <DateInput
                    onChange={(newValue: Date) =>
                        handleInputChange('recruitmentEndDate', newValue)
                    }
                />
            </PeriodContainer>

            {/*지도 */}
            {/*<MapDiv*/}
            {/*    style={{*/}
            {/*        width: '100%',*/}
            {/*        height: '300px',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {coordinate && (*/}
            {/*        <Map*/}
            {/*            mapCenter={coordinate}*/}
            {/*            markerPosition={coordinate}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*</MapDiv>*/}

            {/*기간 입력 */}
            {/* <RadioButtonContainer>
                {(Object.keys(postInfo.sex) as ('male' | 'female' | 'any')[]).map((val, idx) => {
                    return (
                        <RadioButtonWithLessItems
                            key={idx}
                            item={val}
                            value={postInfo.sex[val]}
                            onChange={(newValue) => handleCheckboxChange('sex', val, newValue)}
                        />
                    );
                })
                }
            </RadioButtonContainer> */}

            <RadioButtonWithManyItems items={['10대', '20대', '30대']} />
            {/* <RangeSlider
                value={postInfo.age.range}
                selected={postInfo.age.selected}
                onChange={handleRangeSliderChange}
            /> */}
        </div>
    );
};

export default PostCampaign;

const MapWrapper = styled.div`
    width: 100%;
    height: 200px;
`;

const PeriodContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const RadioButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
