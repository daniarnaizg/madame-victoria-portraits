import {useState} from 'react';
import {getCldImageUrl} from 'next-cloudinary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InitialState from '@/components/InitialState';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import FinalImageDisplay from '@/components/FinalImageDisplay';
import SpookyBackground from "@/components/SpookyBackground";
import VintageFrame from "@/components/VintageFrame";
import JumpscareState from "@/components/JumpscareState";

const STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    ERROR: 'error',
    JUMPSCARE: 'jumpscare',
    FINAL: 'final'
};

export default function Home() {
    const [url, setUrl] = useState(null);
    const [currentState, setCurrentState] = useState(STATES.INITIAL);
    const [retryCount, setRetryCount] = useState(0);
    const [publicId, setPublicId] = useState(null);

    const generateTransformedUrl = (pid) => {
        return getCldImageUrl({
            src: pid,
            width: 860,
            height: 1075,
            namedTransformations: 'dummy_transformation',
            // namedTransformations: 'victorian_painting_v2',
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

        setTimeout(() => {
            scream.pause();
            scream.currentTime = 0; // Reset the audio to the beginning
        }, 1000);

        setTimeout(() => {
            setCurrentState(STATES.FINAL);
        }, 2000);
    };

    const handleUploadSuccess = (results, widget) => {
        const pid = results.info.public_id;
        setPublicId(pid);
        widget.close();
        setCurrentState(STATES.LOADING);
        setUrl(generateTransformedUrl(pid));
    };

    const handleReset = () => {
        setCurrentState(STATES.INITIAL);
        setUrl(null);
        setPublicId(null);
        setRetryCount(0);
    };

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main>
                <SpookyBackground/>
                <div className="flex-grow container mx-auto py-12 relative">
                    {currentState === STATES.INITIAL && (
                        <VintageFrame>
                            <InitialState onUploadSuccess={handleUploadSuccess}/>
                        </VintageFrame>
                    )}
                    {currentState === STATES.LOADING &&
                        <VintageFrame>
                            <LoadingState url={url} onImageLoad={handleImageLoad} onImageError={handleImageError}/>
                        </VintageFrame>
                    }
                    {currentState === STATES.ERROR &&
                        <VintageFrame>
                            <ErrorState onShowMore={handleShowMore}/>
                        </VintageFrame>
                    }
                    {currentState === STATES.JUMPSCARE && <JumpscareState url={url}/>}
                    {currentState === STATES.FINAL && <FinalImageDisplay url={url}/>}
                </div>
            </main>
            <Footer onReset={handleReset} showResetButton={currentState === STATES.FINAL}/>
        </div>
    );
}