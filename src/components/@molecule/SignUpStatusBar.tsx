// @flow
import React, {useState, useEffect} from 'react';
import {IoCaretBackOutline} from 'react-icons/io5';
import {Text} from '../@atoms';
import styled from 'styled-components';

type Props = {
    stage: number;
    onClickBack: () => void;
};


const SignUpStatusBar = ({stage, onClickBack}: Props) => {
    function location(stage: number){

        if (stage === 1 ) return '비밀번호';
        if (stage === 2 ) return '개인정보';
        if (stage === 3 ) return '약관 동의';
    }

    return (
        <>
            {stage === 0 ?
                <></>
                :
                <SignUpStatusBarContainer>
                    <IoCaretBackOutline onClick={onClickBack}/>
                    <Text type={'small2'} tag={'span'}>{stage+1}/4 단계</Text>
                    <Text type={'small2'} tag={'span'}>{location(stage)}</Text>
                </SignUpStatusBarContainer>
            }
        </>
    );
};

export default SignUpStatusBar;

const SignUpStatusBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
