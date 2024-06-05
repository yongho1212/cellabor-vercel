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


const HeaderNav = () => {

    const [isLoggedIn, _] = useRecoilState(loginState);

    return (
        <>
            <HeaderNavContainer>
                <HeaderContentsArea>
                    <LogoArea>
                        <Link to={'/'}>
                            <img src={Logo} alt="logo" className='w-32'/>
                        </Link>
                    </LogoArea>
                    <NavArea>
                    {!isLoggedIn ?
                        <>
                            {NAV_MENU.map((menu, index) => {
                                return (
                                    <Link to={menu.value} key={index}>{menu.key} </Link>
                                );
                            })}
                        </>
                    :
                        <>
                            {/*<Link to={'/profile'}>Profile</Link>*/}
                            {/*<SignOut />*/}
                            <AccountMenu />
                        </>
                    }
                    </NavArea>
                </HeaderContentsArea>
            </HeaderNavContainer>
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
  height: 60px;
  min-width: 767px;
`;

const HeaderContentsArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoArea = styled.div`
`;

const NavArea = styled.div`
`;
