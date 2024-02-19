import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Landing = () => {
    return (
        <div className="h-screen flex flex-row">
            <div className="w-[2%] bg-red-100">lol</div>
            <div className="flex-col flex w-11/12">
                <Header />
                <Body />
                {/* <div className="bg-red-100 h-full flex flex-row">
                <div className="w-[20em]">section1</div>
                <div className="w-4/5">section2</div>
            </div> */}
                {/* <Footer /> */}
                <Footer />
            </div>
        </div>
    );
};

export default Landing;
