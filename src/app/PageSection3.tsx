import Image from "next/image";

const PageSection3 = () => {
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-28">
            <div className="text-center">
                <div className="text-4xl">Layanan Kami</div>
                <div className="mt-2 text-xl">Kami menawarkan pengembangan situs web yang berfokus pada pengalaman
                    pengguna yang
                    baik <br/> dan kinerja yang cepat
                </div>
            </div>
            <div className="mt-10">
                <div className="flex justify-between items-center">
                    <div className="w-[70%]">
                        <div className="relative">
                            <h4 className="text-3xl">Web Development</h4>
                            <Image
                                src="/assets/image/text-line.png"
                                alt="text line"
                                width={393}
                                height={100}
                                className="absolute -bottom-1 -z-10"
                            />
                        </div>
                        <div className="mt-5 text-xl">Kami memahami bahwa setiap bisnis memiliki kebutuhan teknologi
                            yang unik. kami berkomitmen untuk membantu Anda mencapai tujuan bisnis Anda dengan solusi
                            teknologi yang tepat.
                        </div>
                    </div>
                    <div className="w-full inline">
                        <Image
                            src="/assets/image/web-development.png"
                            alt='web development'
                            width={1000}
                            height={518}
                            className="-mr-10"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <div className="flex justify-between">
                    <div className="w-full inline">
                        <Image
                            src="/assets/image/graphic-design.png"
                            alt='web development'
                            width={422}
                            height={376}
                            className="-mr-10"
                        />
                    </div>
                    <div className="w-full">
                        <div className="relative">
                            <h4 className="text-3xl">Design Graphics</h4>
                            <Image
                                src="/assets/image/text-line.png"
                                alt="text line"
                                width={393}
                                height={100}
                                className="absolute -bottom-1 -z-10"
                            />
                        </div>
                        <div className="mt-5 text-xl">Tim kreatif kami berdedikasi untuk menciptakan desain yang menarik
                            dan efektif dalam memperkuat merek dan memenuhi kebutuhan visual bisnis Anda.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <div className="flex justify-between">
                    <div className="w-[50%]">
                        <div className="relative">
                            <h4 className="text-3xl">Videographic / Motion Graphics</h4>
                            <Image
                                src="/assets/image/text-line.png"
                                alt="text line"
                                width={393}
                                height={100}
                                className="absolute -bottom-1 -z-10"
                            />
                        </div>
                        <div className="mt-5 text-xl">Kami menggabungkan desain visual yang menarik dengan teknologi yang canggih untuk menciptakan video yang menarik dan pesan tersampaikan
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-center">
                        <Image
                            src="/assets/image/motion-graphics.png"
                            alt='web development'
                            width={393}
                            height={100}
                            className="-mr-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageSection3;