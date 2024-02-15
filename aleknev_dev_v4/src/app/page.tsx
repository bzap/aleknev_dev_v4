import Image from "next/image";
import Landing from "./components/landing/Landing";
import GlowContainer from "./components/GlowContainer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
            <div
                id={"grad"}
                className="flex w-full justify-center h-full overflow-auto"
            >
                <div className="w-full h-full px-8">
                    <Landing />
                    <Landing />
                    <GlowContainer />
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
