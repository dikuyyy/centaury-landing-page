import Image from "next/image";
import React from "react";
import Instagram from "@/components/Icon/Instagram";
import FacebookIcon from "@/components/Icon/FacebookIcon";
import LinkedinIcon from "@/components/Icon/LinkedinIcon";
import TwitterxIcon from "@/components/Icon/TwitterxIcon";
import YoutubeIcon from "@/components/Icon/YoutubeIcon";
import PhoneIcon from "@/components/Icon/PhoneIcon";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mx-auto max-w-7xl my-20">
            <hr className="my-10"/>
            <div className="grid grid-cols-5 gap-10">
                <div className="flex flex-col gap-5 col-span-2">
                    <Image src="/assets/image/logo.png" width={120} height={57} alt="Logo"/>
                    <div>
                        Kami adalah sebuah perusahaan kreatif digital yang berfokus pada memberikan solusi digital
                        inovatif untuk klien kami.
                    </div>
                    <div>
                        <div className="font-bold">Follow Us</div>
                        <div className='flex gap-1'>
                            <Instagram className='w-5 h-5'/>
                            <FacebookIcon className='w-5 h-5'/>
                            <LinkedinIcon className='w-5 h-5'/>
                            <TwitterxIcon className='w-5 h-5'/>
                            <YoutubeIcon className='w-5 h-5'/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Phone</div>
                        <div>0838 2213 1894</div>
                    </div>
                    <div>
                        <div className="font-bold">Gmail</div>
                        <div>centauryg@gmail.com</div>
                    </div>
                </div>
                <div>
                    <div className="font-bold">Company</div>
                    <div className="mt-12 flex flex-col gap-2">
                        <Link className="font-bold" href='/works'>
                            Works
                        </Link>
                        <Link className="font-bold" href='/services'>
                            Services
                        </Link>
                        <Link className="font-bold" href='/about'>
                            About
                        </Link>
                        <Link className="font-bold" href='/request-project'>
                            Request Project
                        </Link>
                        <Link className="font-bold" href='/privacy-policy'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="font-bold">Information</div>
                    <div className="mt-12 flex flex-col gap-2">
                        <Link className="font-bold" href='/careers'>
                            Careers
                        </Link>
                        <Link className="font-bold" href='/affiliate'>
                            Affiliate
                        </Link>
                        <Link className="font-bold" href='/faq'>
                            FAQ
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="font-bold">Subscribe Newsletter</div>
                    <div className="mt-12 flex flex-col gap-2">
                        <div>Your Email</div>
                        <input type="text" id="first_name"
                               className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="John" required/>
                        <button className='w-full bg-blue-primary text-white rounded-xl py-1'>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;