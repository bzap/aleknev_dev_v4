const Footer = () => {
    const footerItems: string[] = ["LINKEDIN", "INSTAGRAM", "GITHUB"];
    return (
        <div className="w-full h-[5.2em] border-t-[1px] border-cbrown text-cbrown ">
            <div className="h-full flex flex-row items-center">
                <div className="w-4/12 h-full items-center flex">
                    <div className="flex flex-col gap-1 items-center -rotate-45">
                        <div className="w-4 bg-cbrown h-0.5 rounded-lg" />
                        <div className="w-6 bg-cbrown h-0.5 rounded-lg" />
                        <div className="w-4 bg-cbrown h-0.5 rounded-lg" />
                    </div>
                </div>
                <div className="flex flex-row justify-between w-8/12 text-xs">
                    {footerItems.map((item, index) => {
                        return <div key={item + index}>{item}</div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;
