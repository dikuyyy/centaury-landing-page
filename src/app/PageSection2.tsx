import Image from "next/image";

const PageSection2 = () => {
    type projectType = {
        link: string;
        image: string;
        alt: string;
        name: string;
    }
    const project: projectType[] = [
        {
            link: 'https://www.mudikgratis.com',
            image: 'portfolio-1.png',
            alt: 'mudik gratis',
            name: 'Tracking Application'
        },
        {
            link: 'https://www.transisi.com',
            image: 'portfolio-2.png',
            alt: 'transisi',
            name: 'Transisi'
        },
        {
            link: 'https://www.khalifa.com',
            image: 'portfolio-3.png',
            alt: 'khalifa',
            name: 'Khalifa Jewellery'
        },
        {
            link: 'https://www.ibudandan.com',
            image: 'portfolio-4.png',
            alt: 'Ibu dandan',
            name: 'Ibu Dan Dan'
        },
        {
            link: 'https://www.peppos.com',
            image: 'portfolio-5.png',
            alt: 'peppos',
            name: "Peppo's"
        },
        {
            link: 'https://www.doctor-supervised.com',
            image: 'portfolio-6.png',
            alt: 'Doctor Supervised',
            name: "Doctor Supervised"
        }
    ];
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-36">
            <div className="text-center">
                <div className="text-4xl">Projek Kami</div>
                <div>Kami telah menyelesaikan beberapa projek dari klient kami, projek yang
                    telah kami kerjakan di antara nya
                </div>
            </div>
            <div className="grid grid-cols-3 my-10 gap-4">
                {project.map((item: projectType, index: number) => {
                    return (
                        <a href={item.link} key={index} target='_blank'>
                            <div className="relative w-full h-full overflow-hidden rounded-xl group/item">
                                <Image src={'/assets/image/' + item.image } alt={item.alt} width={497} height={271}
                                       className="w-full h-60"/>
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-40 group-hover/item:opacity-60 transition-all duration-300">
                                </div>
                                <div
                                    className='absolute bottom-2 left-2 text-white z-10 font-bold text-xl opacity-0 group-hover/item:opacity-100 transition-all duration-300'>{item.name}
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className="flex justify-center">
                <button className='bg-blue-primary text-white text-xl rounded-2xl px-8 py-1 font-bold'>See more</button>
            </div>
        </div>
    )
}

export default PageSection2;