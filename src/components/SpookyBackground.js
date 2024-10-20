import React, { useMemo } from 'react';
import Image from 'next/image';

const PORTRAIT_IMAGES = [
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

const ROW_POSITIONS = ['top-[5%]', 'top-[40%]', 'top-[75%]'];
const MIN_GAP = 200;
const MAX_GAP = 500;
const PORTRAIT_WIDTH = 40;
const PORTRAIT_HEIGHT = 52;

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const getRandomGap = () => Math.floor(Math.random() * (MAX_GAP - MIN_GAP + 1)) + MIN_GAP;

const generateRowData = (images) => {
    const shuffledImages = shuffleArray([...images, ...images]);
    return shuffledImages.map((src, index) => ({
        src,
        gap: index === 0 ? 0 : getRandomGap(),
    }));
};

const SpookyPortrait = React.memo(({ src, gap, index }) => (
    <div
        className={`relative shrink-0 w-${PORTRAIT_WIDTH} h-${PORTRAIT_HEIGHT}`}
        style={{ marginLeft: `${gap}px` }}
    >
        <Image
            src={src}
            alt={`Spooky portrait ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover filter sepia opacity-80 drop-shadow-lg"
        />
    </div>
));

SpookyPortrait.displayName = 'SpookyPortrait';

const SpookyRow = React.memo(({ rowData, rowIndex }) => (
    <div
        className={`absolute left-0 right-0 flex items-center
      ${ROW_POSITIONS[rowIndex]}
      ${rowIndex % 2 === 0 ? 'animate-moveLeft' : 'animate-moveRight'}`}
    >
        {rowData.map(({ src, gap }, index) => (
            <SpookyPortrait
                key={`${rowIndex}-${index}`}
                src={src}
                gap={gap}
                index={index}
            />
        ))}
    </div>
));

SpookyRow.displayName = 'SpookyRow';

const SpookyBackground = () => {
    const rows = useMemo(() => (
        Array.from({ length: 3 }, () => generateRowData(PORTRAIT_IMAGES))
    ), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {rows.map((rowData, index) => (
                <SpookyRow key={index} rowData={rowData} rowIndex={index} />
            ))}
        </div>
    );
};

export default SpookyBackground;