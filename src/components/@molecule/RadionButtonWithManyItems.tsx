// @flow
import React, {useState, useEffect} from 'react';
import {Checkbox, Text} from '../@atoms';
import styled from 'styled-components';

type Props = {
    items: string[];
};

const items = ['남자', '여자'];

const RadioButtonWithManyItems = ({items}: Props) => {
    return (
        <CheckBoxContainer>
            {items.map((item: string, index: number) => {
                    return (
                        <CheckBoxItems>
                            <Checkbox
                                isChecked={false}
                                handleCheck={() => {}}
                            />
                            <Text type={'small1'}>{item}</Text>
                        </CheckBoxItems>
                    );
                }
            )}
        </CheckBoxContainer>
    );
};

export default RadioButtonWithManyItems;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxItems = styled.div`
  display: flex;
  align-items: center;
`;
