// @flow
import React, {useState, useEffect} from 'react';
import {socialList} from '../../constants/snsList';
import {Button} from '../@atoms';
import styled from 'styled-components';
import {SignInWithSns} from '../../apis/auth/snsSignin';
import {redirect, useNavigate} from 'react-router-dom';
import {useRecoilState, useResetRecoilState} from 'recoil';
import {loginState, profileState} from '../../states/user/atoms/loginState';
import {checkProfile} from '../../utils/checkProfile';


const SnsButtons = () => {
    const navigate = useNavigate();
    const [_, setLoggedIn] = useRecoilState(loginState);
    const [profile, setProfile] = useRecoilState(profileState);

    async function sns(name: string){
        if (!name) return;
        if (name ) {
            // const res = await signInWithGoogle();
            const res = await SignInWithSns(name);
            console.log(res);
            if (res.status === 200 && res?.data.msg === 'exist') {
                const profile = res.data.user;
                const isFilled = checkProfile(profile);
                // const dataArr = [profile.sex, profile.birth, profile.role];
                // const isFilled =  dataArr.every(item => item !== undefined);
                setProfile(isFilled);
                setLoggedIn(true);
                navigate('/workspace');
            } else if (res.status === 200 && res?.data.msg === 'new') {
                // newProfile로 이동
                setLoggedIn(true);
                setProfile(false);
                navigate('/new-profile');
                console.log(res);
            }
        } else {
            console.log(name);
        }
    };

    return (
        <SnsButtonsContainer>
            {Object.entries(socialList).map(([key, Icon]) => (
                <Button key={key} onClick={() => sns(key)}>
                    <Icon />
                </Button>
            ))}
        </SnsButtonsContainer>
    );
};

export default SnsButtons;

const SnsButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;
