import React, {useEffect} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import HeaderNav from './components/@organism/HeaderNav';
import {useRecoilState} from 'recoil';
import {loginState, profileState} from './states/user/atoms/loginState';

import {getAuth} from 'firebase/auth';


const ProtectedRoute = ( ) => {
    const [loggedIn, setLoggedIn] = useRecoilState(loginState);
    const [profile, setProfile] = useRecoilState(profileState);

    // if (!loggedIn) {
    //     return <Navigate to="/" replace />;
    // } else if (!profile && loggedIn) {
    //     return <Navigate to="/new-profile" replace />;
    // }
    return (<Outlet />);
};

export default ProtectedRoute;
