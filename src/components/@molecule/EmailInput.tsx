// @flow
import React, {useState, useEffect, useContext, FC, Context, useRef} from 'react';
import styled from 'styled-components';

import {Text, Input, Spacer} from '../@atoms';
import {theme} from '../../styles/theme/theme';


interface EmailInputProps {
    context: Context<any>;
}

const EmailInput: React.FC<EmailInputProps> = ({ context  }) => {
    const textarea = useRef<HTMLInputElement>(null);
    const contextValue = useContext(context);
    if (!contextValue){
        throw new Error('Context not found');
    }

    const { userInfo, handleInputChange } = contextValue;
    console.log(userInfo);

    return (
        <EmailInputContainer>
            <Text type={'body3'}>이메일</Text>
            <Spacer height={10}/>

            <Input
                textarea={textarea}
                value={userInfo.email}
                onChange={(newValue) => handleInputChange('email', newValue)}
                type='email'
                placeholder={'이메일'}
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

export default EmailInput;


const EmailInputContainer = styled.div`

`;
