import React from "react";

import Header from "./components/header/Header";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col min-w-screen items-center justify-between">
            <div className="w-full min-h-screen px-8 base:py-6 md:py-10 max-w-2xl gap-4 flex flex-col">
                <Header />
                <About />
                <Experience />
                <Projects />
                <Footer />
            </div>
        </main>
    );
}
