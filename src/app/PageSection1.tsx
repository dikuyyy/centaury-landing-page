import Image from "next/image";

const PageSection1 = () => {
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
                <div className='inline-block'>
                    <h1 className="text-7xl">
                        Inovasi <br/> Digital Terdepan
                    </h1>
                    <h2 className="text-5xl">
                        Untuk Bisnis Anda!
                    </h2>
                    <div className="text-xl font-semibold my-3">
                        Solusi digital inovatif untuk kebutuhan bisnis Anda
                    </div>
                    <button
                        className="px-3 py-1 bg-blue-primary text-white rounded-xl text-xl font-semibold">Contact Us
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/assets/image/startup-finance.png" alt="start up finance" width={493} height={532}/>
                </div>
            </div>
        </div>
    )
}

export default PageSection1