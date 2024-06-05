// @flow
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {getAuth, signOut} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../../states/user/atoms/loginState';

type Props = {

};


const SignOut = (props: Props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [_, setLoggedIn] = useRecoilState(loginState);

    function handleSignOut() {
        signOut(auth).then(() => {
            localStorage.removeItem('uid');
            localStorage.removeItem('accessToken');
            setLoggedIn(false);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return (
        <>
            <Button variant="outlined" onClick={handleSignOut}>SignOut</Button>
        </>
    );
};

export default SignOut;
