// @flow
import React from 'react';
import styled from 'styled-components';

type WidthType = number | string;

type Props = {
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    width?: WidthType;
    height?: number;
};

const TextArea = ({ value, placeholder, onChange, width, height }: Props) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <StyledTextArea
            value={value}
            placeholder={placeholder}
            onChange={handleOnChange}
            width={width}
            height={height}
        />
    );
};

export default TextArea;

type StyledProps = {
    width?: WidthType;
    height?: number;
};

const StyledTextArea = styled.textarea<StyledProps>`
  width: ${props => props.width ? typeof props.width === 'number' ? `${props.width}px` : props.width : '100%'};
  height: ${props => `${props.height}px` || '100px'};
  
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;
