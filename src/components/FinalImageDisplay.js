import React from 'react';
import Image from 'next/image';

const FinalImageDisplay = ({ url }) => (

    <div className="max-w-md mx-auto p-5 bg-black bg-opacity-60 drop-shadow-md rounded-lg shadow-2xl">
        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
            <Image
                src={url}
                width={2000}
                height={2000}
                alt="Victorian Portrait"
                className="rounded-lg"
            />
        </div>
        <p className="mt-4 text-center font-serif italic text-amber-600 text-sm sm:text-base">
            Contemple, su imagen capturada para toda la eternidad...
        </p>
    </div>
);

export default FinalImageDisplay;