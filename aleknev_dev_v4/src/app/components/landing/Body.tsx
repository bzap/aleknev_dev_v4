import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";
import GlowContainer from "../GlowContainer";

const Body = () => {
    return (
        <div className="flex flex-row h-full w-full max-w-screen justify-center z-30">
            <div className="w-1/2">{/* <GlowContainer /> */}</div>

            {/* <div>
                    <div className="flex flex-col gap-3 text-white items-start text-5xl">
                        <div className="w-[100%] flex items-start flex-row pb-4 pr-4 gap-4 pr-6">
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
                    </div>
                </div> */}
        </div>
    );
};

export default Body;
