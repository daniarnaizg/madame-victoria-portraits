import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const InitialState = ({ onUploadSuccess }) => (
    <div className="w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-60 drop-shadow-md py-8 px-6">
        <h1 className="text-4xl font-serif mb-6 text-amber-700 tracking-widest relative animate-flicker">
            Salon de retratos de
            <span className="block text-5xl mt-2 font-bold text-red-700">Madame Victoria</span>
        </h1>
        <div className="w-32 h-1 bg-amber-900 mx-auto mb-8" />
        <p className="mb-8 font-serif italic text-lg text-amber-600 leading-relaxed">
            ¡Adelante, querido invitado!<br/>
            Permítame capturar su belleza en la... <span className="text-red-400 italic">moda</span> de 1887.
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
                    <span className="relative z-10">Tómese su retrato</span>
                    <div className="absolute inset-0 bg-red-900/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
            )}
        </CldUploadWidget>
    </div>
);

export default InitialState;