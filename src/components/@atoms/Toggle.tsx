import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <ToggleWrapper onClick={toggleSwitch} isOn={isOn}>
            <ToggleIndicator isOn={isOn} />
        </ToggleWrapper>
    );
};
export default Toggle;

const ToggleWrapper = styled.div<{isOn: boolean}>`
  position: relative;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => 
          props.isOn ? props.theme.colors.primary : props.theme.colors.grey1};
  cursor: pointer;
`;

const ToggleIndicator = styled.div<{isOn: boolean}>`
  position: absolute;
  top: 2px;
  left: ${props => props.isOn ? '26px' : '2px'};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transition: left 0.2s;
`;
