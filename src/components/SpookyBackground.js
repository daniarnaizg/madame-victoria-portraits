import React, { useEffect, useState } from 'react';
import Image from "next/image";

const images = [
    '/images/portrait1.webp',
    '/images/portrait2.webp',
    '/images/portrait3.webp',
    '/images/portrait4.webp',
    '/images/portrait5.webp',
    '/images/portrait6.webp',
    '/images/portrait7.webp',
    '/images/portrait8.webp',
    '/images/portrait9.webp',
    '/images/portrait10.webp',
    '/images/portrait11.webp',
    '/images/portrait12.webp',
    '/images/portrait13.webp',
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const getRandomRotation = () => {
    return Math.floor(Math.random() * 16) - 10; // Random angle between -10 and 10 degrees
};

const getRandomGap = () => {
    return `${Math.floor(Math.random() * 50) + 10}px`; // Random gap between 10px and 60px
};

const SpookyBackground = () => {
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        setShuffledImages(shuffleArray([...images]));
    }, []);

    return (
        <div className="spooky-background">
            {shuffledImages.map((src, index) => (
                <div
                    key={index}
                    className={`spooky-image-container row-${(index % 3) + 1}`}
                    style={{ '--random-gap': getRandomGap() }}
                >
                    <Image
                        src={src}
                        alt={`Spooky portrait ${index + 1}`}
                        width={150}
                        height={100}
                        style={{
                            transform: `rotate(${getRandomRotation()}deg)`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default SpookyBackground;