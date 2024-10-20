import React from 'react';
import Image from 'next/image';

const IconLink = ({iconSrc, iconAlt, text, url}) => (
    <button
        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
        className="text-white hover:underline flex items-center"
    >
        <Image src={iconSrc} alt={iconAlt} width={24} height={24} className="mr-2"/>
        {text}
    </button>
);

const Footer = ({onReset, showResetButton}) => (
    <footer className="bg-black bg-opacity-40 drop-shadow-md shadow-lg text-white p-4 mt-8">
        <div className="container mx-auto flex justify-between">
            <div className="flex space-x-4">
                <IconLink
                    iconSrc="/midudev.svg"
                    iconAlt="midudev"
                    text="midudev"
                    url="https://midu.dev/"
                />
                <IconLink
                    iconSrc="/Cloudinary.svg"
                    iconAlt="Cloudinary"
                    text="Cloudinary"
                    url="https://cloudinary.com/blog/cloudinary-cloudcreate-spooky-ai-hackathon"
                />

            </div>
            {showResetButton && (
                <button
                    onClick={onReset}
                    className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded font-serif"
                >
                    Toma otro retrato
                </button>
            )}
            <div className="flex space-x-2 items-center">
                <span>Made with 🪿 by</span>
                <a href="https://www.cuack.es/" target="_blank" rel="noopener noreferrer">
                    <Image src="/Cuack.svg"
                           alt="Cuack"
                           width={70}
                           height={70}
                           className="mr-2 cursor-pointer"/>
                </a>
            </div>

        </div>
    </footer>
);

export default Footer;