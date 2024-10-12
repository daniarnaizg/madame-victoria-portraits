import React from 'react';
import Image from 'next/image';

const FinalImageDisplay = ({ url }) => (
    <div className="max-w-md mx-auto p-5 bg-amber-100 border-8 border-double border-amber-900 rounded-lg shadow-2xl">
        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
            <Image
                src={url}
                layout="fill"
                objectFit="contain"
                alt="Victorian Portrait"
                className="rounded-lg animate-invertColors" // animate-invertColors
            />
        </div>
        <p className="mt-4 text-center font-serif italic text-amber-900 text-sm sm:text-base">
            Behold, your haunting visage captured for eternity...
        </p>
    </div>
);

export default FinalImageDisplay;