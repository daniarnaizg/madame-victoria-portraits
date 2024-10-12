import React from 'react';
import Image from 'next/image';

const JumpscareState = ({ url }) => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        {url && (
            <Image
                src={url}
                width={800}
                height={800}
                alt="Jumpscare"
                priority
                className="radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)"
            />
        )}
    </div>
);

export default JumpscareState;