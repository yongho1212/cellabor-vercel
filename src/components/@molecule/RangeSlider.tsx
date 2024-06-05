// @flow
import React, {useState, useEffect} from 'react';
import Slider from '@mui/material/Slider';
import {Checkbox, Text} from '../@atoms';
import styled from 'styled-components';

type Props = {
    value: number[];
    selected: boolean;
    onChange: (newValue: number[], newSelected: boolean) => void;

};
function valuetext(value: number) {
    return `${value}세`;
}
const RangeSlider = ({value, selected, onChange}: Props) => {
    console.log(value);
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChange(newValue as number[], selected);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(value, event.target.checked);
    };

    return (
        <div>
            <CheckBoxContainer>
                <Checkbox
                    isChecked={selected}
                    handleCheck={handleCheckboxChange}
                />
                <Text type={'body3'}>무관</Text>
            </CheckBoxContainer>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disabled={selected}
            />
        </div>
    );
};

export default RangeSlider;


const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
