const Header = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col text-7xl font-semibold tracking-tighter text-brwhite">
                <div>LINAS ALEKNEVICIUS</div>
                <div>FULLSTACK</div>
                <div className="h-full pl-[4em]">
                    <div className="flex flex-row">
                        <div className="text-[6px] text-cbrown tracking-normal pt-2 pr-1">
                            DETAILED
                        </div>
                        <div className="">DEV.</div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-end items-end text-brwhite -mt-8">
                <div className="flex text-center text-7xl flex-col text-5xl font-semibold tracking-tighter">
                    <div>PROJECTS</div>
                    <div className="flex flex-row justify-center">
                        <div className="text-cbrown text-[6px] -mr-8 gap-0.5 flex flex-col tracking-normal items-end justify-center">
                            <div>+2021</div>
                            <div>+2022</div>
                            <div>+2023</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="pl-10">2020&</div>
                            <div className="pl-2">2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
