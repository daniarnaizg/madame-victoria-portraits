import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

const LoadingState = ({ url, onImageLoad, onImageError }) => (
    <div className="max-w-2xl mx-auto text-center bg-neutral-700 bg-opacity-90 drop-shadow-md py-8 px-6">
        <div className="relative">
            <DotLottieReact
                src="/loading2.lottie"
                autoplay
                loop
                className="mx-auto mb-4"
            />
            <div className="absolute" />
        </div>
        <p className="font-serif italic text-xl text-amber-500 animate-pulse mt-8">
            Por favor, permanezca completamente inmóvil...<br/>
            <span className="text-amber-600 text-sm">Su alma— quiero decir, su esencia debe ser capturada perfectamente...</span>
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