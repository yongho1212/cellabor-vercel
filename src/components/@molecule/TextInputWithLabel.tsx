// @flow
import React, {useState, useEffect} from 'react';
import {Input, Spacer, Text, TextArea} from '../@atoms';

type Props = {
    label: string;
    contents: string;
    onContentsChange: (newValue: string) => void;
    height: number
};

type PostInfo = {
    title: string;
    contents: string;
};

const TextInputWithLabel = ({label, contents, onContentsChange, height}: Props) => {
    const handleChange = (newValue: string) => {
        onContentsChange(newValue);
    };


    return (
        <div>
            <Text type={'body3'}>{label}</Text>
            <TextArea
                onChange={handleChange}
                value={contents}
                height={height}
            />
            <Spacer height={26}/>
        </div>
    );
};

export default TextInputWithLabel;
