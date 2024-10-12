import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const InitialState = ({ onUploadSuccess }) => (
    <div className="max-w-2xl mx-auto text-center p-12 bg-black bg-opacity-80 drop-shadow-md border-8 border-double border-amber-900 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] relative overflow-hidden">
        {/* Victorian decorative corners */}
        {/*<div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-900 rounded-tl-lg" />*/}
        {/*<div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-900 rounded-tr-lg" />*/}
        {/*<div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-900 rounded-bl-lg" />*/}
        {/*<div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-900 rounded-br-lg" />*/}

        <h1 className="text-4xl font-serif mb-6 text-amber-700 tracking-widest relative animate-flicker">
            Madame Victoria's
            <span className="block text-5xl mt-2 font-bold text-red-700">Portrait Parlour</span>
        </h1>
        <div className="w-32 h-1 bg-amber-900 mx-auto mb-8" />
        <p className="mb-8 font-serif italic text-lg text-amber-600 leading-relaxed">
            Step right up, dear guest!<br/>
            Allow me to capture your likeness in the most... <span className="text-red-500">modern</span> fashion of 1887.
        </p>
        <CldUploadWidget
            uploadPreset="upload-unsigned-images"
            onSuccess={onUploadSuccess}
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
    </div>
);

export default InitialState;