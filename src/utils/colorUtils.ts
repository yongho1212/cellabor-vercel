import { DefaultTheme } from 'styled-components';
import { ColorsType } from '../styles/theme/theme';

export const getColor =
    (colorKey: keyof ColorsType) => (props: { theme: DefaultTheme }) =>
        props.theme.colors[colorKey];
