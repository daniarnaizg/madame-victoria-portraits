import React from 'react';

const Footer = ({ onReset, showResetButton }) => (
    <footer className=" bg-black bg-opacity-40 drop-shadow-md shadow-lg text-white p-4 mt-8">
        <div className="container mx-auto flex justify-center items-center">
            {showResetButton && (
                <button
                    onClick={onReset}
                    className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded font-serif"
                >
                    Start Over
                </button>
            )}
        </div>
    </footer>
);

export default Footer;