import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img<{ role?: string; width?: string; height?: string; }>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.role === 'inf' ? '20px' : '100%'};
  object-fit: contain;
`;


type ImageProps = {
    src: string;
    width?: string;
    height?: string;
    alt: string;
    role? : 'inf' | 'ad' ;
};

const Image: React.FC<ImageProps> = ({ src, alt, width, height, role }) => {
    return <StyledImage src={src} alt={alt} width={width} height={height} role={role} />;
};

export default Image;

