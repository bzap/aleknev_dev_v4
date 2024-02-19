import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";

const Body = () => {
    return (
        <div className="flex flex-col h-full justify-center gap-10 z-30">
            <div className="flex flex-col text-7xl font-black antialiased text-black tracking-tighter">
                <div className="">LINAS ALEKNEVICIUS</div>
                <div>FULLSTACK</div>
                <div className="h-full pl-[4em]">
                    <div className="italic">DEV.</div>
                </div>

                {/* <div className="fixed bottom-8">
                    <div className="flex flex-col tracking-normal gap-0.5">
                        <div className="text-[0.8rem]">[ github ]</div>
                        <div className="text-[0.8rem]">[ linkedin ]</div>
                        <div className="text-[0.8rem]">[ instagram ]</div>
                    </div>
                </div> */}
            </div>
            <div>
                <div className="flex flex-col gap-3 text-black text-justify items-start  tracking-tighter text-5xl antialiased">
                    <div className="w-[100%] flex items-start flex-col pb-4 pr-4 gap-4 pr-6">
                        <div className="text-[0.6rem] tracking-normal">
                            <div className="max-w-[47em]"> {paragraph}</div>
                        </div>
                        <div className=" text-[0.6rem] tracking-normal text-justify">
                            <div className="max-w-[47em]">{paragraphTwo}</div>
                        </div>
                        <div className="text-[0.6rem] tracking-normal text-justify">
                            <div className="max-w-[47em]">{paragraphThree}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
