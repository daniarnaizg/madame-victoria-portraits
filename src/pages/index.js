import { useState } from 'react';
import { CldUploadWidget, getCldImageUrl } from 'next-cloudinary';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    JUMPSCARE: 'jumpscare'
};

export default function Home() {
    const [url, setUrl] = useState(null);
    const [showWidget, setShowWidget] = useState(true);
    const [currentState, setCurrentState] = useState(STATES.INITIAL);
    const [retryCount, setRetryCount] = useState(0);
    const [publicId, setPublicId] = useState(null);

    const generateTransformedUrl = (pid) => {
        return getCldImageUrl({
            src: pid,
            width: 300,
            height: 300,
            replace: {
                from: 'face',
                to: 'terrifying jumpscare face screaming with mouth wide open showcasing large pointy teeth surreal and otherworldly features intricate details dramatic shadows'
            },
            replaceBackground: {
                prompt: 'A hauntingly realistic cemetery shrouded in fog eerie shadows gnarled trees realistic skeletons emerging from ancient graves ominous atmosphere dramatic lighting'
            },
        });
    };

    const handleImageLoad = () => {
        setTimeout(() => setCurrentState(STATES.ERROR), 2000);
    };

    const handleImageError = () => {
        console.log('Image failed to load, retrying...');
        setRetryCount(prev => prev + 1);
        const newUrl = generateTransformedUrl(publicId) + `?retry=${retryCount}`;
        setUrl(newUrl);
    };

    const handleShowMore = () => {
        setCurrentState(STATES.JUMPSCARE);
        const scream = new Audio('/scream.mp3');
        scream.play().catch(console.error);
    };

    const InitialState = () => (
        <div className="max-w-2xl mx-auto text-center p-12 bg-gradient-to-b from-amber-50 to-amber-100 border-8 border-double border-amber-900 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] relative overflow-hidden">
            {/* Victorian decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-900 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-900 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-900 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-900 rounded-br-lg" />

            <h1 className="text-4xl font-serif mb-6 text-amber-900 tracking-widest relative animate-flicker">
                Madame Victoria's
                <span className="block text-5xl mt-2 font-bold text-red-900">Portrait Parlour</span>
            </h1>
            <div className="w-32 h-1 bg-amber-900 mx-auto mb-8" />
            <p className="mb-8 font-serif italic text-lg text-amber-900 leading-relaxed">
                Step right up, dear guest!<br/>
                Allow me to capture your likeness in the most... <span className="text-red-900">modern</span> fashion of 1887.
            </p>
            {showWidget && (
                <CldUploadWidget
                    uploadPreset="upload-unsigned-images"
                    onSuccess={(results, widget) => {
                        const pid = results.info.public_id;
                        setPublicId(pid);
                        setShowWidget(false);
                        widget.close();
                        setCurrentState(STATES.LOADING);
                        setUrl(generateTransformedUrl(pid));
                    }}
                >
                    {({ open }) => (
                        <button
                            onClick={open}
                            className="bg-amber-900 text-white px-12 py-6 rounded-lg font-serif text-xl hover:bg-red-900 transition-all duration-500 border-2 border-amber-950 shadow-[0_0_15px_rgba(139,69,19,0.3)] transform hover:scale-105 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Take Your Portrait</span>
                            <div className="absolute inset-0 bg-red-900/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </button>
                    )}
                </CldUploadWidget>
            )}
        </div>
    );

    const LoadingState = () => (
        <div className="max-w-2xl mx-auto text-center p-8">
            <div className="relative">
                <DotLottieReact
                    src="/loading2.lottie"
                    autoplay
                    loop
                    className="mx-auto mb-4 opacity-80"
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
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        priority
                    />
                </div>
            )}
        </div>
    );

    const ErrorState = () => (
        <div className="max-w-2xl mx-auto p-4 animate-fadeIn">
            <div className="bg-gradient-to-r from-red-100 to-amber-100 border-l-8 border-red-900 p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all">
                <p className="text-red-900 font-serif text-lg leading-relaxed relative">
                    <span className="block mb-2 text-2xl">Oh my...</span>
                    Something seems to have gone... <span className="italic">terribly wrong</span> with your portrait...
                    <button
                        onClick={handleShowMore}
                        className="ml-2 text-red-700 underline hover:text-red-900 transition-colors duration-300 font-bold"
                    >
                        Show me anyway
                    </button>
                </p>
            </div>
        </div>
    );

    const JumpscareState = () => (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            {url && (
                <Image
                    src={url}
                    width={800}
                    height={800}
                    alt="Jumpscare"
                    priority
                    className="opacity-100 animate-invertColors shadow-[0_0_50px_rgba(255,0,0,0.5)]"
                />
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
            <main className="container mx-auto py-12 px-4">
                {currentState === STATES.INITIAL && <InitialState />}
                {currentState === STATES.LOADING && <LoadingState />}
                {currentState === STATES.ERROR && <ErrorState />}
                {currentState === STATES.JUMPSCARE && <JumpscareState />}
            </main>
        </div>
    );
}