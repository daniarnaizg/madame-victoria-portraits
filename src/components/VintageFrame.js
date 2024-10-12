import React from 'react';
import Image from 'next/image';

const VintageFrame = ({ children }) => {
    return (
        <div className="mx-auto w-[60%] md:w-[40%]">
            <div className="border-2 border-[#DE9B72] p-1.5 mx-auto">
                <div className="border-[6px] border-[#DE9B72] p-1.5">
                    <div className="relative border-2 border-[#DE9B72]">
                        <Image src="/corner-deco.png" alt="Corner decoration" width={80} height={80}
                               className="absolute -m-[3px] w-8 md:w-12 lg:w-16 xl:w-20 -left-1 -top-1 md:-left-0 md:-top-0 z-20"/>
                        <Image src="/corner-deco.png" alt="Corner decoration" width={80} height={80}
                               className="absolute -m-[3px] w-8 md:w-12 lg:w-16 xl:w-20 -right-1 -top-1 md:-right-0 md:-top-0 transform scale-x-[-1] z-20"/>
                        <Image src="/corner-deco.png" alt="Corner decoration" width={80} height={80}
                               className="absolute -m-[3px] w-8 md:w-12 lg:w-16 xl:w-20 -right-1 -bottom-1 md:-right-0 md:-bottom-0 transform scale-[-1] z-20"/>
                        <Image src="/corner-deco.png" alt="Corner decoration" width={80} height={80}
                               className="absolute -m-[3px] w-8 md:w-12 lg:w-16 xl:w-20 -left-1 -bottom-1 md:-left-0 md:-bottom-0 transform scale-y-[-1] z-20"/>

                        <Image src="/frame-deco.png" alt="Vertical decoration" width={432} height={80}
                               className="absolute left-1/2 transform -translate-x-1/2 w-32 md:w-48 lg:w-64 xl:w-80 -top-4 md:-top-6 lg:-top-8 z-20"/>
                        <Image src="/frame-deco.png" alt="Vertical decoration" width={432} height={80}
                               className="absolute left-1/2 transform -translate-x-1/2 w-32 md:w-48 lg:w-64 xl:w-80 -bottom-4 md:-bottom-6 lg:-bottom-8 scale-y-[-1] z-20"/>

                        <div className="relative">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VintageFrame;