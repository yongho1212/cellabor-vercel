// @flow
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

type LayoutProps = {
    children: any;
    $isfull?: boolean | undefined;
};
const Layout = ({children, $isfull}: LayoutProps) => {
    return (
        <Wrapper $isfull={$isfull}>
            {children}
        </Wrapper>
    );
};

export default Layout;

const Wrapper = styled.div<{ $isfull?:boolean }>`
  width: ${props => props.$isfull ? '100%' : '60%'};
  margin-left: auto;
  margin-right: auto;
  
  max-width: ${props=> props.$isfull ? '' : '1200px'};
  min-width: 767px;
  //작업을 위한 임시 경계선 입니다.
  border: 1px solid #ccc;
  display: flex;
  justify-content: ${props=> props.$isfull ? '' : 'center'};

`;
