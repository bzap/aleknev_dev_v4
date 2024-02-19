import DownButton from "./DownButton";
import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col text-7xl font-semibold antialiased text-white tracking-tighter">
                <div>LINAS ALEKNEVICIUS</div>
                <div>FULLSTACK</div>
                <div className="h-full pl-[4em]">
                    <div className="">DEV.</div>
                </div>

                <div className="fixed bottom-8">
                    <div className="flex flex-col tracking-normal font-medium gap-0.5">
                        <div className="text-[0.8rem]">[ github ]</div>
                        <div className="text-[0.8rem]">[ linkedin ]</div>
                        <div className="text-[0.8rem]">[ instagram ]</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-3 text-white text-justify items-end  tracking-tighter text-5xl font-medium antialiased">
                    <div className="w-[80%] flex items-end flex-col pb-4 pr-4 gap-4 pr-6">
                        <div className="text-[0.7rem] tracking-normal">
                            <div className="max-w-[40em]"> {paragraph}</div>
                        </div>
                        <div className=" text-[0.7rem] tracking-normal text-justify">
                            <div className="max-w-[40em]">{paragraphTwo}</div>
                        </div>
                        <div className="text-[0.7rem] tracking-normal text-justify">
                            <div className="max-w-[40em]">{paragraphThree}</div>
                        </div>
                        <div className="bg-white h-1 w-3 absolute bottom-8 right-8" />
                        <div className="bg-white h-3 w-1 absolute bottom-8 right-8" />
                        <div className="bg-white h-3 w-1 absolute top-8 right-8" />
                        <div className="bg-white h-1 w-3 absolute top-8 right-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
