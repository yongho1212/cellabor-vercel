// @flow
import React, {useState, useEffect} from 'react';
import {Checkbox, Text} from '../@atoms';
import styled from 'styled-components';

type Props = {
    item: string;
    value: boolean;
    onChange: (newValue: boolean) => void

};

const items = ['남자', '여자'];

const RadioButtonWithLessItems = ({item, value, onChange}: Props) => {
    const [isChecked, setIsChecked] = useState(value);

    const handleCheck = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange(newValue);
    };

    return (

        <CheckBoxItems>
            <Checkbox
                isChecked={value}
                handleCheck={handleCheck}
            />
            <Text type={'small1'}>{item}</Text>
        </CheckBoxItems>

    );
};

export default RadioButtonWithLessItems;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CheckBoxItems = styled.div`
  display: flex;
  align-items: center;
`;
