import React from 'react';
import { Button } from '../@atoms';

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

export default function FilterItem(props: Props) {
    const { children, onClick } = props;
    return <Button children={children} onClick={onClick} />;
}
