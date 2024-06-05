import React, {useState, useRef, useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {Card as MuiCard, CardContent, CardMedia, Typography} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import './CardInfluencer.css';

import {SearchInfluencerProps} from '../@pages/SearchInfluencerPage';

interface CardInfluencerProps extends SearchInfluencerProps {
    index :number;
    isLoaded: boolean;
}

// !!

export default function CardInfluencer({index, uid, profileImg, name, description,category, isLoaded}: CardInfluencerProps){
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);
    const fixedHeight = 200;
    const [cardWidth, setCardWidth] = useState<number | null>(null);

    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth);
        }
    }, []);

    const memoizedWidth = useMemo(() => cardWidth, [cardWidth]);


    function handleClickDetailProfile() {
        console.log('clicked', uid);
        navigate(`/profile/${uid}`);
    }

    function imageLoad() {
        setImageLoaded(true);
    }

    return (
        <MuiCard
            key={index}
            className="influencer-card shadow-md dark:bg-gray-800 dark:text-gray-200"
            onClick={handleClickDetailProfile}
            ref={cardRef}
        >
            {profileImg ? (
                <>
                    {!imageLoaded && <Skeleton variant="rectangular" height={fixedHeight} />}
                    <CardMedia
                        component="img"
                        alt="Product Image"
                        height={fixedHeight}
                        image={profileImg}
                        onLoad={imageLoad}
                        // style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                </>
            ) : (
                <Skeleton variant="rectangular" height={memoizedWidth!} />
            )
            }
            {isLoaded ?
                <CardContent>
                    <Typography gutterBottom component="div" sx={{ fontSize: '1rem' }} >
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <div  color="text.secondary">
                        <div className='flex flex-row'>
                            {category && category.map((item, index) => (
                                <div
                                    key={index}
                                    className='border-2 mx-1 px-1'
                                >{item}</div>
                            ))}
                        </div>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        SNS
                    </Typography>
                </CardContent>
                :
                <CardContent>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </CardContent>
            }
        </MuiCard>
    );
}
