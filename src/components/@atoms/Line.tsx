import styled from 'styled-components';

interface LineProps {
    width: string | number;
    color?: string
}

const Line = styled.div<LineProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: 1px;
  background-color: ${({ color, theme }) => color || theme.colors.grey5}; // 변경된 부분
`;


export default Line;
