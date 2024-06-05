// @flow
import React, {useState, useEffect, useContext, Context} from 'react';
import styled from 'styled-components';

import {Text, Input, Spacer} from '../@atoms';
import {theme} from '../../styles/theme/theme';

interface PwInputProps {
    context: Context<any>;
}
const PasswordInput: React.FC<PwInputProps> = ({context}) => {
    const textarea = React.useRef<HTMLInputElement>(null);
    const contextValue = useContext(context);
    if (!contextValue){
        throw new Error('Login Context not found');
    }
    const { userInfo, handleInputChange } = contextValue;


    return (
        <EmailInputContainer>
            <Text type={'body3'}>비밀번호</Text>
            <Spacer height={10}/>

            <Input
                textarea={textarea}
                value={userInfo.password}
                onChange={(newValue) => handleInputChange('password', newValue)}
                type='password'
                placeholder={'비밀번호'}
                style={{width:'100%',
                    height:'40px',
                    borderRadius:'10px',
                    border:'none',
                    backgroundColor:`${theme.colors.grey1}`,
                    padding: '10px 0 10px 10px'
                }}

            />
        </EmailInputContainer>
    );
};

export default PasswordInput;


const EmailInputContainer = styled.div`

`;
