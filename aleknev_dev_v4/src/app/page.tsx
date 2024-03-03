import Image from "next/image";
import Landing from "./components/landing/Landing";
import GlowContainer from "./components/GlowContainer";
import GlowContainer2 from "./components/GlowContainer2";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";
import Body from "./components/landing/Body";
import Projects from "./components/projects/Projects";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col min-w-screen items-center justify-between ">
            <div id={"grad"} className="flex w-full justify-center h-full ">
                <div className="w-full h-screen px-8 max-w-2xl gap-8 flex flex-col">
                    {/* <Header /> */}
                    <Header />
                    {/* <Footer /> */}
                    {/* <Landing /> */}
                    <Body />
                    <Projects />
                    <Footer />
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
