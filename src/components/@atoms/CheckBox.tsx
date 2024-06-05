import React, { useState, ChangeEvent } from 'react';
import Text from '../@atoms/Text';
import styled from 'styled-components';

type CheckBoxProps = {
    isChecked: boolean;
    handleCheck: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({isChecked, handleCheck}) => {

    return (
            <CheckBoxInput>
                <input type="checkbox" checked={isChecked} onChange={handleCheck} />
            </CheckBoxInput>
    );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-template-rows: 30px 1fr;
`;

const CheckBoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff; 
    border: 1px solid #007BFF;
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
  }

  input[type="checkbox"]:checked {
    background-color: #007BFF; 
  }
  // 체크 받그 내부 스타일링 영역
  input[type="checkbox"]:checked::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


