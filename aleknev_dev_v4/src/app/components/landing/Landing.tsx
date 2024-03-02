import Image from "next/image";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";

const Landing = () => {
    return (
        <div className="h-screen justify-center items-center flex">
            <div className="flex-col flex h-[95%] w-full">
                <div className="flex flex-row gap-8 body-text absolute top-2">
                    <div>HOME</div>
                    <div> INSTAGRAM</div>
                    <div>LINKEDIN</div>
                    <div>GITHUB</div>
                </div>
                {/* <div className="absolute text-white">
                    <Image
                        src={"/Haus-13.png"}
                        alt="/"
                        width={300}
                        height={300}
                    />
                </div> */}

                <div className="h-full fixed right-8">
                    <div className="flex justify-between gap-4 flex-col h-full">
                        <div
                            className="flex flex-col title-text 
                w-full"
                        >
                            <div className="flex flex-col -mt-[5.1rem]">
                                <div className="flex flex-row pl-[9.2rem]">
                                    LINAS
                                </div>
                                <div className="flex flex-row pl-[4.6rem]">
                                    LINAS
                                </div>
                                <div className="flex flex-row ">LINAS</div>
                            </div>

                            {/* <div className="">ALEKNEVIČIUS</div> */}

                            <div className="">ALEKNEVICIUS</div>
                            <div className="">ALEKNEVICIUS</div>

                            {/* <div className="fixed bottom-8">
                    <div className="flex flex-col tracking-normal gap-0.5">
                        <div className="text-[0.8rem]">[ github ]</div>
                        <div className="text-[0.8rem]">[ linkedin ]</div>
                        <div className="text-[0.8rem]">[ instagram ]</div>e
                    </div>
                </div> */}
                        </div>
                    </div>
                </div>

                <div className="fixed right-7 -bottom-[3.8rem]">
                    <div className="flex justify-between gap-4 flex-col h-full">
                        <div
                            className="flex flex-col title-text 
                w-full"
                        >
                            <div className="pl-[4em]">FULL+</div>
                            <div className="pl-[2.10em]">STACK</div>
                            <div className="h-full pl-[0rem]">
                                <div className="">DEVELOPER</div>
                                <div className="pl-[4.1rem]">DEVELOPER</div>
                                <div className="pl-[7.6rem]">DEVELOPER</div>
                            </div>

                            {/* <div className="fixed bottom-8">
                    <div className="flex flex-col tracking-normal gap-0.5">
                        <div className="text-[0.8rem]">[ github ]</div>
                        <div className="text-[0.8rem]">[ linkedin ]</div>
                        <div className="text-[0.8rem]">[ instagram ]</div>e
                    </div>
                </div> */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-3xl fixed -bottom-4 left-8 text-white  leading-[1.7rem]">
                    <div className="flex flex-col -ml-[5.5rem] ">
                        <div className="font-semibold ">PROJECTS</div>
                        <div className="font-semibold ">PROJECTS</div>
                        <div className="font-semibold ">PROJECTS</div>
                    </div>

                    <div className="font-semibold  pl-[4.2rem]">PROJECTS</div>

                    <div className="flex flex-row gap-8 ">
                        <div className="font-semibold ">PROJECTS</div>
                        <div>{"---------->"}</div>
                    </div>

                    <div className="font-semibold ">PROJECTS</div>
                    <div className="font-semibold ">PROJECTS</div>
                </div>

                {/* <Header />
                <Body /> */}
                {/* <div className="bg-red-100 h-full flex flex-row">
                <div className="w-[20em]">section1</div>
                <div className="w-4/5">section2</div>
            </div> */}
                {/* <Footer /> */}
                {/* <Footer /> */}

                {/* <div className="body-text flex justify-between">
                            <div className="flex flex-col leading-[0.6rem]">
                                <div className="max-w-[6rem]">
                                    0100100012020 AVIAPRO CONSULTING INC.
                                    TORONTO ON.
                                </div>
                            </div>
                            <div className="flex flex-col leading-[0.6rem]">
                                <div className="max-w-[6rem]">
                                    01001001001001010010101010 AVIAPRO
                                    CONSULTING INC. TORONTO ON.
                                </div>
                            </div>
                            <div className="flex flex-col leading-[0.6rem]">
                                <div className="max-w-[6rem]">
                                    01001001001001010010101010 AVIAPRO
                                    CONSULTING INC. TORONTO ON.
                                </div>
                            </div>
                        </div> */}

                {/* <div className="flex flex-col gap-3 text-white items-start text-5xl">
                            <div className="w-[100%] flex items-start flex-row gap-4 pr-6">
                                <div className="flex flex-row ">
                                    <div className="body-text">
                                        BACKGROUND INFORMATION
                                    </div>
                                    <div className=" body-text">
                                        <div className="max-w-[18em]">
                                            <strong className="pr-6 font-black">
                                                TORONTO
                                            </strong>

                                            {paragraph}
                                        </div>
                                    </div>
                                </div>

                                <div className="body-text">
                                    <div className="max-w-[18em]">
                                        {paragraphTwo}
                                    </div>
                                </div>
                                <div className="body-text">
                                    <div className="max-w-[18em]">
                                        {paragraphThree}
                                    </div>
                                </div>
                            </div>
                        </div> */}
            </div>
        </div>
    );
};

export default Landing;
