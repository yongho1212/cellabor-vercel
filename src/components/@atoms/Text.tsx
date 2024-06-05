import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme/theme';

type TextType =
    | 'title1'
    | 'title2'
    | 'title3'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'small1'
    | 'small2';

interface TextProps {
    tag?: 'p' | 'span';
    type: TextType;
    color?: keyof typeof theme.colors;
    children: React.ReactNode;
}

const PText = styled.p<{ type: TextType; color?: keyof typeof theme.colors; }>`
  font-size:  ${(props) => props.theme.texts[props.type].fontSize};
  color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  font-weight: ${(props) => props.theme.texts[props.type].fontWeight};
  line-height: ${(props) => props.theme.texts[props.type].lineHeight};
`;

const SpanText = styled.span<{ type: TextType; color?: keyof typeof theme.colors; }>`
  font-size:  ${(props) => props.theme.texts[props.type].fontSize};
  color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  font-weight: ${(props) => props.theme.texts[props.type].fontWeight};
  line-height: ${(props) => props.theme.texts[props.type].lineHeight};
`;

const Text: React.FC<TextProps> = ({ tag, type, color, children }) => {
    const Component = tag === 'span' ? SpanText : PText;
    return <Component type={type} color={color}>{children}</Component>;
};

export default Text;
