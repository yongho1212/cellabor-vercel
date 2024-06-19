// @flow
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Outlet, Link, redirect, Navigate} from 'react-router-dom';
import {NAV_MENU} from '../../constants/headerNavMenus';
import {useQueryClient} from '@tanstack/react-query';
import {getAuth} from 'firebase/auth';
import {getUserInfo} from '../../apis/user/getProfile';
import SignOut from '../@molecule/SignOut';
import {loginState} from '../../states/user/atoms/loginState';
import {useRecoilState, useResetRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import AccountMenu from '../@molecule/HeaderMenu';
import Logo from '../../images/cellabor_logo.png';
import {BsPersonCircle} from 'react-icons/bs';

import {useResponsive} from '../../hooks/useResponsive';
import RootContainer from '../@layouts/RootContainer';


const HeaderNav = () => {
    const navigate = useNavigate();
    const [isLoggedIn, _] = useRecoilState(loginState);
    const {isDesktop, isTablet, isMobile} = useResponsive();

    return (
        <>
            {/*<HeaderNavContainer>*/}
            <RootContainer>
                <HeaderContentsArea>
                    <LogoArea>
                        <Link to={'/'}>
                            <img src={Logo} alt="logo" className='w-32'/>
                        </Link>
                    </LogoArea>
                    <NavArea>
                        {!isLoggedIn ?
                            <>
                                {isMobile ?
                                    <BsPersonCircle size={25} onClick={() => navigate('/signin')}/>
                                    :
                                    <div className={'flex border-2 rounded-md px-3 py-1'}>
                                        <Link to={'/signin'}>로그인 / 회원가입</Link>
                                    </div>
                                }
                            </>
                            :
                            <>
                                <AccountMenu/>
                            </>
                        }
                    </NavArea>
                </HeaderContentsArea>
            </RootContainer>
            {/*</HeaderNavContainer>*/}
            {/*<Outlet/>*/}
        </>
    );
};


export default HeaderNav;

const HeaderNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: darkgrey;
    height: 6vh;

    @media (max-width: 768px) {

    }
`;

const HeaderContentsArea = styled.div`
    width: 100%;
    height: 6vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const LogoArea = styled.div`

`;

const NavArea = styled.div`

`;

