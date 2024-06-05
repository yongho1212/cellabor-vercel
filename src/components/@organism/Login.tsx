// @flow
import React, {useState, useEffect, useContext, createContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {SnsButtons, EmailInput, PasswordInput} from '../@molecule';
import {Line, Spacer} from '../@atoms';

import {LoginParamsType} from '../../types/auth.types';

export type LoginContextType = {
    userInfo : LoginParamsType;
    handleInputChange:(key: string, newValue: string) => void;
};


export const LoginContext = createContext<LoginContextType | undefined>(undefined);
const LoginProvider = ({children}: {children: React.ReactNode}) => {
    const [userInfo, setUserInfo] = useState<LoginParamsType>({
        email: '',
        password: '',
    });
    console.log(userInfo);
    const handleInputChange = (key: string, newValue: string | undefined) => {
        setUserInfo(prevState => ({...prevState, [key]: newValue}));
    };

    return (
        <LoginContext.Provider value={{ userInfo, handleInputChange }}>
            {children}
        </LoginContext.Provider>
    );
};

LoginProvider.EmailInput = EmailInput;
LoginProvider.PasswordInput = PasswordInput;

const Login = () => {

    return (
        <LoginProvider>
        <LoginContainer>
            {'로그인'}
            <InputField>
                <SnsButtons />
                <Spacer height={40}/>
                <Line width={'100%'}/>
                <Spacer height={40}/>
                <EmailInput context={LoginContext}/>
                <Spacer height={20}/>
                <LoginProvider.PasswordInput context={LoginContext}/>
                <Line width={'100%'}/>
                <Spacer height={60}/>
                <LinkContainer>
                    <Link to={'/signup'}>회원가입 </Link>
                     |
                    <Link to={'/signup'}> 비밀번호 찾기</Link>
                </LinkContainer>

            </InputField>
        </LoginContainer>
        </LoginProvider>
    );
};

export default Login;

const LoginContainer = styled.div`
  width: 500px;    
  height: 500px;
  border: 1px solid darkgrey;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.div`
  width: 80%;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
