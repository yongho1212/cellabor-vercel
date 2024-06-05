// @flow

import React, {useState, useEffect, ChangeEvent, createContext, useContext} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import styled from 'styled-components';
import {theme} from '../../styles/theme/theme';
import {Link} from 'react-router-dom';

import {EmailInput,PasswordInput, SnsButtons, BirthInput, IdInput, CheckBoxWithText, SignUpStatusBar} from '../@molecule';
import {Button, Text, Spacer, Line} from '../@atoms';

import {LoginParamsType, SignupParamsType} from '../../types/auth.types';
import {SIGNUP_TERMS} from '../../constants/signupTerms';
import {LoginContext} from './Login';

import {requestSignup} from '../../apis/auth';

interface SignupContextType {
    userInfo : SignupParamsType;
    handleInputChange:(key: string, newValue: string) => void;
    handleTermChange: (key: string, isChecked: boolean) => void;
    handleSignup: () => void;
};

export const SignupContext = createContext<SignupContextType | undefined>(undefined);

const SignupProvider = ({children} : {children: React.ReactNode}) => {
    const [userInfo, setUserInfo] = useState<SignupParamsType>({
        email: '',
        password: '',
        birthday: '',
        // name: '',
        id: '',
        terms: {
            cellabor: false,
            marketing: false,
            privacy: false,
            thirdparty: false
        }
    });
    console.log(userInfo);
    const handleInputChange = (key: string, newValue: string | Dayjs | null) => {
        setUserInfo(prevState => ({...prevState, [key]: newValue}));
    };

    const handleTermChange = (key: string, isChecked: boolean) => {
        setUserInfo(prevState => ({
            ...prevState,
            terms: {
                ...prevState.terms,
                [key]: isChecked
            }
        }));
    };

    const handleSignup = async () => {
        const res = await requestSignup(userInfo);
        console.log(res);
    };

    return (
      <SignupContext.Provider value={{userInfo, handleInputChange, handleTermChange, handleSignup}}>
          {children}
      </SignupContext.Provider>
    );
};

SignupProvider.EmailInput = EmailInput;
SignupProvider.PasswordInput = PasswordInput;
SignupProvider.BirthInput = BirthInput;
SignupProvider.IdInput = IdInput;

const SignUp = () => {
    const [stage, setStage] = useState(0);

    const handleSignup = () => {};



    function onNextStage() {
        if (stage === 3) return;

        setStage(stage + 1);
    };

    function onPrevStage() {

        if (stage === 0) return;

        setStage(stage - 1);
    }




    return (
        <SignupProvider>
            <SignUpContainer>
                {'회원가입'}
                <SignUpStatusBar stage={stage} onClickBack={onPrevStage}/>
                {stage === 0 &&
                    <InputField>
                        <SnsButtons/>
                        <Spacer height={40}/>
                        <Line width={'100%'}/>
                        <Spacer height={40}/>
                        <SignupProvider.EmailInput context={SignupContext}/>
                    </InputField>

                }
                {stage === 1 &&
                    <InputField>
                        <PasswordInput context={SignupContext}/>
                    </InputField>
                }
                {stage === 2 &&
                    <>
                        <BirthInput context={SignupContext} />
                        <IdInput context={SignupContext} />
                    </>
                }
                {stage === 3 &&
                    <>
                        {
                            SIGNUP_TERMS.map((term) => (
                                <CheckBoxWithText
                                    key={term.key}
                                    termKey={term.key}
                                    text={term.text}
                                    context={SignupContext}
                                />
                            ))
                        }
                    </>
                }
                <Spacer height={40}/>
                <Button
                    onClick={stage === 3 ? handleSignup : onNextStage}
                    height={50}
                    width={'80%'}
                    borderRadius={'30px'}
                    style={{
                        background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                    }}
                >
                    <Text type={'body3'} color={'white'}>
                        {stage === 3 ?
                            '가입하기'
                            :
                            '다음'
                        }
                    </Text>
                </Button>
                {stage === 0 &&
                    <>
                        <Spacer height={40}/>
                        <Line width={'100%'}/>
                        <Spacer height={40}/>
                        <LinkContainer>
                            <Link to={'/login'}>로그인 </Link>
                        </LinkContainer>
                    </>

                }
            </SignUpContainer>
        </SignupProvider>

    );
};

export default SignUp;


const SignUpContainer = styled.div`
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
