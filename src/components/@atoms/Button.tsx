import * as React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

interface Props {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    width?: string | number; // 문자열로 변경
    minWidth?: string | number; // 문자열로 변경
    height?: string | number; // 문자열로 변경
    fontSize?: number;
    borderRadius?: string; // borderRadius prop 추가
    disabled?: boolean;
    onClick: () => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const ButtonComponent: React.FC<Props> = (props: Props) => {
    const {
        startIcon,
        endIcon,
        width,
        minWidth,
        height,
        fontSize,
        borderRadius, // 사용
        disabled,
        onClick,
        style,
        children,
    } = props;

    // StyledButton 내부에서 props를 직접 참조
    const StyledButton = styled(Button)(({ theme }) => ({
        width: width ?? '72px', // 기본값 설정
        minWidth: minWidth ?? '72px', // 기본값 설정
        height: height ?? '32px', // 기본값 설정
        fontSize: fontSize ?? '14px',
        lineHeight: '20px',
        letterSpacing: 0,
        textAlign: 'center',
        fontWeight: 500,
        fontFamily: 'Spoqa Han Sans Neo',
        border: '1px solid',
        borderColor: '#DADCE0',
        color: '#202124',
        backgroundColor: 'white',
        borderRadius: borderRadius ?? '6px', // 기본값 설정
        boxSizing: 'border-box',
        '&:hover': {
            backgroundColor: '#F8F9FA',
            borderColor: '#DADCE0',
        },
        '&:disabled': {
            backgroundColor: 'white',
            borderColor: '#DADCE0',
            color: '#9AA0A6',
        },
        '&:focus': {
            backgroundColor: '#F8F9FA',
            borderColor: '#BDC1C16',
            border: '1.5px solid',
        },
        ...style, // spread operator를 사용하여 사용자 정의 스타일을 추가
    }));

    return (
        <StyledButton
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={() => onClick()} // onClick이 항상 정의되므로, undefined 검사를 제거
            style={style}
        >
            {children}
        </StyledButton>
    );
};

ButtonComponent.defaultProps = {
    onClick: () => {}, // 빈 함수를 기본값으로 설정
    disabled: false,
    width: '72px',
    height: '32px',
    minWidth: '72px',
    fontSize: 16,
    borderRadius: '6px',
    style: {},
};

export default ButtonComponent;
