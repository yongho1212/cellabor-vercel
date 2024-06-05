import React from 'react';
import { Button } from '../@atoms';
import FilterItem from '../@molecule/FilterItem';
import InputComponent from '../@atoms/Input';

export default function CampainFilter() {
    const textarea = React.useRef<HTMLInputElement>(null);
    const [searchText, setSearchText] = React.useState<string>('');

    const handleInputChange = (value: string) => {
        setSearchText(value);
    };

    return (
        <div>
            <InputComponent
                textarea={textarea}
                value={searchText}
                onChange={(newValue) => handleInputChange(newValue)}
                type="email"
                placeholder={'검색'}
                style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    padding: '10px 0 10px 10px',
                }}
            />
            <div style={{ display: 'flex' }}>
                <FilterItem
                    onClick={() => {
                        console.log('성별 순으로 정렬');
                    }}
                >
                    성별
                </FilterItem>
                <FilterItem
                    onClick={() => {
                        console.log('연령 순으로 정렬');
                    }}
                >
                    연령
                </FilterItem>
                <FilterItem
                    onClick={() => {
                        console.log('팔로워 수 순으로 정렬');
                    }}
                >
                    팔로워수
                </FilterItem>
                <FilterItem
                    onClick={() => {
                        console.log('팔로워 수 순으로 정렬');
                    }}
                >
                    팔로워수
                </FilterItem>
                <FilterItem
                    onClick={() => {
                        console.log('지역으로 정렬');
                    }}
                >
                    지역
                </FilterItem>
                <FilterItem
                    onClick={() => {
                        console.log('보상종류로 정렬');
                    }}
                >
                    보상종류
                </FilterItem>
                <FilterItem
                    onClick={() => {
                        console.log('해시태그로 정렬');
                    }}
                >
                    해시태그
                </FilterItem>
                <Button
                    onClick={() => {
                        console.log('검색 서비스 연동 예정');
                    }}
                >
                    검색
                </Button>
            </div>
        </div>
    );
}
