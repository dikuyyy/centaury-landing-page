
import PageSection1 from "@/app/PageSection1";
import PageSection2 from "@/app/PageSection2";
import PageSection3 from "@/app/PageSection3";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <main className='mt-16'>
            <PageSection1 />
            <PageSection2 />
            <PageSection3 />
        </main>
    );
}
