import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 pt-6 sm:px-6 lg:px-8">
                <div className="relative flex h-16 justify-between items-center">
                    <div className="flex-shrink-0">
                        <Image src="/assets/image/logo.png" width={120} height={57} alt="Logo"/>
                    </div>
                    <div className='block'>
                        <div className='flex items-center space-x-8'>
                            <Link className="font-bold" href='/works'>
                                Works
                            </Link>
                            <Link className="font-bold" href='/services'>
                                Services
                            </Link>
                            <Link className="font-bold" href='/about'>
                                About
                            </Link>
                            <Link className="font-bold bg-blue-primary text-white px-6 py-1 rounded-xl" href='/contact-us'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
