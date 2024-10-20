import React, { useEffect } from 'react';
import Image from 'next/image';

const JumpscareState = ({ url }) => {

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            {url && (
                <Image
                    src={url}
                    alt="Jumpscare"
                    width={1500}
                    height={1500}
                    priority
                    className="radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%) animate-invertColors" // animate-invertColors"
                />
            )}
        </div>
    );
};

export default JumpscareState;