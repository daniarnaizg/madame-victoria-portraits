import React from 'react';

const ErrorState = ({ onShowMore }) => (
    <div className="max-w-2xl mx-auto p-4 animate-fadeIn">
        <div className="bg-gradient-to-r from-red-100 to-amber-100 border-l-8 border-red-900 p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-all">
            <p className="text-red-900 font-serif text-lg leading-relaxed relative">
                <span className="block mb-2 text-2xl">Oh my...</span>
                Something seems to have gone... <span className="italic">terribly wrong</span> with your portrait...
                <button
                    onClick={onShowMore}
                    className="ml-2 text-red-700 underline hover:text-red-900 transition-colors duration-300 font-bold"
                >
                    Show me anyway
                </button>
            </p>
        </div>
    </div>
);

export default ErrorState;