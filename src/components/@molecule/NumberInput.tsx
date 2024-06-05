// @flow
import React, {useState, useEffect} from 'react';
import {Button, Input, Text} from '../@atoms';
import styled from 'styled-components';

type Props = {
    label: string
};

interface InputLabelProps {
    children?: React.ReactNode;
}

function InputLabel({children}: InputLabelProps){
    return <Text type={'body3'}>{children}</Text>;
}

interface InputButtonProps {
    children: React.ReactNode;
};

function InputButton({children}: InputButtonProps){
    return <Button onClick={() => console.log('s')}>{children}</Button>;
}

interface NumberInputMainProps {
    children: React.ReactNode;
    minValue: number;
    maxValue: number;
    onMinChange: (newValue: number) => void;
    onMaxChange: (newValue: number) => void;
}

function NumberInputMain ({children, minValue, maxValue, onMinChange, onMaxChange}: NumberInputMainProps) {
    const handleMinChange = (newVal: number) => {
        onMinChange(Number(newVal));
    };
    const handleMaxChange = (newVal: number) => {
        onMaxChange(Number(newVal));
    };
    const inputLabelElement = React.Children.toArray(children).find(child => React.isValidElement(child) && child.type === InputLabel);
    const inputButtonElement = React.Children.toArray(children).find(child => React.isValidElement(child) && child.type === InputButton);

    return (
        <NumberInputContainer>
            {inputLabelElement}
            <NumberInputArea>
                <Input
                    type={'number'}
                    value={minValue}
                    onChange={handleMinChange}
                    style={{width:'200px', height:'100%'}}
                />

                <Input type={'number'} value={maxValue} onChange={handleMaxChange}
                       style={{width:'200px', height:'100%'}}
                />
                {inputButtonElement}
            </NumberInputArea>
        </NumberInputContainer>
    );
};

export const NumberInput = Object.assign(NumberInputMain,{
    Label: InputLabel,
    Button: InputButton
});

const NumberInputContainer = styled.div`

  width: 100%;

`;

const NumberInputArea = styled.div`
  display: flex;
  justify-content: space-between;
`;


