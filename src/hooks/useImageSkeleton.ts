import { useState, useEffect } from 'react';

function useImageSize(imageUrl: string) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            setImageSize({ width: img.width, height: img.height });
            setImageLoaded(true);
        };
    }, [imageUrl]);

    return { imageLoaded, imageSize };
}

export default useImageSize;
