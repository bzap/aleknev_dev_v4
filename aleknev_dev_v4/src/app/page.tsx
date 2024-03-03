import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/About";
import Projects from "./components/projects/Projects";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col min-w-screen items-center justify-between ">
            <div id={"grad"} className="flex w-full justify-center h-full ">
                <div className="w-full h-screen px-8 py-12 max-w-2xl gap-8 flex flex-col">
                    <Header />
                    {/* <Footer /> */}
                    {/* <Landing /> */}
                    <Body />
                    <Projects />
                    <Footer />

                    {/* <Landing /> */}
                    {/* {/* <GlowContainer /> */}
                    {/* <GlowContainer2 /> */}
                    {/* <Navbar />
                    
            <Hero />
            <Projects />
            <Skills />
            {/* <Contact /> */}
                </div>
            </div>
        </main>
    );
}
