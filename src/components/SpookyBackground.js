import React from 'react';
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
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const groupImages = (array, groupSize) => {
    const groups = [];
    for (let i = 0; i < array.length; i += groupSize) {
        groups.push(array.slice(i, i + groupSize));
    }
    return groups;
};

const SpookyBackground = () => {
    const shuffledImages = shuffleArray([...images]);
    const groupedImages = groupImages(shuffledImages, 2); // Adjust the group size as needed

    return (
        <div className="spooky-background">
            {groupedImages.map((group, rowIndex) => (
                <div key={rowIndex} className={`spooky-row row-${(rowIndex % 3) + 1}`}>
                    {group.map((src, index) => (
                        <Image key={index} src={src} alt={`Spooky portrait ${index + 1}`} width={150} height={100} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SpookyBackground;