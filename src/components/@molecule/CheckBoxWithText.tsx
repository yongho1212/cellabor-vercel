// @flow
import React, {useState, useEffect, ChangeEvent, Context, useContext} from 'react';
import styled from 'styled-components';

import {Checkbox, Spacer, Text} from '../@atoms';


type Props = {
    isChecked: boolean;
    text: string;
    handleCheck: (newValue: boolean) => void
};

interface CheckInputProps {
    context: Context<any>;
    text: string;
    termKey: string;
}

const CheckBoxWithText = ({context, text, termKey}: CheckInputProps) => {
    const contextValue = useContext(context);
    if (!contextValue){
        throw new Error('Login Context not found');
    }
    const { userInfo, handleTermChange } = contextValue;

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleTermChange(termKey, event.target.checked);
    };

    return (
        <CheckBoxContainer>
            <Checkbox
                isChecked={userInfo.terms[termKey]}
                handleCheck={handleCheck}
            />
            <div>
                <Spacer height={7}/>
                <Text type={'small1'}>{text}</Text>
            </div>
        </CheckBoxContainer>
    );
};
export default CheckBoxWithText;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid darkgrey;
  padding: 30px;
  border-radius: 20px;
  width: 80%;
  margin-bottom: 10px;
`;
