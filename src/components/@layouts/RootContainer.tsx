// @flow
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useResponsive} from '../../hooks/useResponsive';


type Props = {
    children: React.ReactNode;
};
const RootContainer = ({children}: Props) => {
    const {isDesktop, isTablet, isMobile} = useResponsive();

    return (
        <Container>
            <Content isMobile={isMobile} >
                {children}
            </Content>
        </Container>
    );
};

export default RootContainer;


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Content = styled.div<{isMobile:boolean}>`
    width: 100%;
    max-width: 1624px;
    display: flex;
    padding: ${props => props.isMobile ? '0' : '0 64px'};
    
`;
