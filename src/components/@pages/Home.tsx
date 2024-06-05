// @flow
import React, { useState, useEffect } from 'react';
import Layout from '../@layouts/Layout';
import { Toggle, Image, Button, Input, Checkbox, Spinner } from '../@atoms';
import SignUp from '../@organism/SignUp';
import CampaginListPage from './CampainListPage';
import {getUserInfo} from '../../apis/user/getProfile';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// Recoil atom 정의
const countState = atom({
    key: 'countState',
    default: 0,
});

// Recoil selector 정의
const doubleCountSelector = selector({
    key: 'doubleCountSelector',
    get: ({ get }) => {
        const count = get(countState);
        return count * 2;
    },
});



type Props = {};
const Home = (props: Props) => {
    // (20231225, chanhwi) input 컴포넌트 사용 시 필수 엘리먼트
    const textarea = React.useRef<HTMLInputElement>(null);
    const [isDefault, setIsDefault] = React.useState(true);
    const [isError, setIsError] = React.useState(true);
    const [isChecked, setIsChecked] = React.useState(false);

    const onEraseFunc = () => {
        setIsError(false);
    };
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const [count, setCount] = useRecoilState(countState);
    const doubleCount = useRecoilValue(doubleCountSelector);


    return (
        <Layout>
            <div>
                <p>Count: {count}</p>
                <p>Double Count: {doubleCount}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            {/*<CampaginListPage />*/}
        </Layout>
    );
};

export default Home;
