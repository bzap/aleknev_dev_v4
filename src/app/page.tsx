import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col min-w-screen items-center justify-between ">
            <div className="w-full h-screen px-8 py-14 max-w-2xl gap-8 flex flex-col">
                <Header />
                <About />
                <Projects />
                <Footer />
            </div>
        </main>
    );
}
