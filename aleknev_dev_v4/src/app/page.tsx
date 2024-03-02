import Image from "next/image";
import Landing from "./components/landing/Landing";
import GlowContainer from "./components/GlowContainer";
import GlowContainer2 from "./components/GlowContainer2";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col min-w-screen items-center justify-between overflow-hidden">
            <div id={"grad"} className="flex w-full justify-center h-full ">
                <div className="w-full h-screen px-8 ">
                    <Landing />

                    {/* <Landing /> */}
                    {/* <GlowContainer />
                    <GlowContainer2 /> */}
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
