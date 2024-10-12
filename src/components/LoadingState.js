import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

const LoadingState = ({ url, onImageLoad, onImageError }) => (
    <div className="max-w-2xl mx-auto text-center p-8">
        <div className="relative">
            <DotLottieReact
                src="/loading2.lottie"
                autoplay
                loop
                className="mx-auto mb-4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-transparent" />
        </div>
        <p className="font-serif italic text-xl text-amber-900 animate-pulse mt-8">
            Please remain perfectly still...<br/>
            <span className="text-red-900 text-sm">Your soul— I mean, your essence must be captured just right...</span>
        </p>
        {url && (
            <div className="hidden">
                <Image
                    src={url}
                    width={800}
                    height={800}
                    alt="Preloading"
                    onLoad={onImageLoad}
                    onError={onImageError}
                    priority
                />
            </div>
        )}
    </div>
);

export default LoadingState;