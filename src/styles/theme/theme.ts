import {DefaultTheme} from 'styled-components';

const colors = {
    primary: '#00e376',
    secondary: '#2d81ff',
    black: '#000',
    grey9: '#1c1c1e',
    grey8: '#363639',
    grey7: '#48484a',
    grey6: '#636366',
    grey5: '#8e8e93',
    grey4: '#aeaeb2',
    grey3: '#c6c6c6',
    grey2: '#d9d9d9',
    grey1: '#f4f4f4',
    white: '#fff',
};


const texts = {
    title1: {
        fontSize: '32px',
        fontWeight: 'bold',
    },
    title2: {
        fontSize: '28px',
        fontWeight: 'bold',
    },
    title3: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    subtitle1: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    subtitle2: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    body1: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    body2: {
        fontSize: '16px',
        fontWeight: 'regular',
    },
    body3: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
    body4: {
        fontSize: '14px',
        fontWeight: 'medium',
    },
    body5: {
        fontSize: '14',
        fontWeight: 'regular',
    },
    small1: {
        fontSize: '12px',
        fontWeight: 'regular',
    },
    small2: {
        fontSize: '10px',
        fontWeight: 'regular',
    }
};


export type ColorsType = typeof colors;

export type TextsType = typeof texts;

export const theme: DefaultTheme = {
    colors,
    texts
};
