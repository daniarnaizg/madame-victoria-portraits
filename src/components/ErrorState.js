import React from 'react';

const ErrorState = ({ onShowMore }) => (
    <div className="max-w-2xl mx-auto bg-black bg-opacity-60 drop-shadow-md py-8 px-6 flex flex-col">
        <p className="text-amber-500 font-serif text-lg leading-relaxed relative mb-4 text-center">
            <span className="block mb-2 text-2xl text-center">Oh, no...</span>
            Algo parece haber salido... <span className="italic">terriblemente mal</span> con su retrato...
        </p>
        <button
            onClick={onShowMore}
            className="text-amber-600 underline hover:text-red-700 transition-colors duration-300 font-bold text-center"
        >
            Probemos otra vez
        </button>
    </div>
);

export default ErrorState;