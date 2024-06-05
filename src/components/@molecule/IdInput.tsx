// @flow
import React, {useState, useEffect, Context, useContext} from 'react';
import styled from 'styled-components';

import {Text, Input} from '../@atoms';
import {theme} from '../../styles/theme/theme';

type Props = {
    id: string,
    setId: (newValue: string) => void
};

interface IdInputProps {
    context: Context<any>;
}
const IdInput = ({context}: IdInputProps) => {
    const textarea = React.useRef<HTMLInputElement>(null);

    const contextValue = useContext(context);
    if (!contextValue){
        throw new Error('Login Context not found');
    }
    const { userInfo, handleInputChange } = contextValue;


    return (
        <IdInputInputContainer>
            <Text type={'body3'}>아이디</Text>
            <Input
                textarea={textarea}
                value={userInfo.id}
                onChange={(newValue) => handleInputChange('id', newValue)}
                type='text'
                placeholder={'아이디'}
                style={{width:'100%',
                    height:'40px',
                    borderRadius:'10px',
                    border:'none',
                    backgroundColor:`${theme.colors.grey1}`,
                    padding: '10px 0 10px 10px'
                }}
            />
        </IdInputInputContainer>
    );
};

export default IdInput;


const IdInputInputContainer = styled.div`
  width: 80%;
`;
