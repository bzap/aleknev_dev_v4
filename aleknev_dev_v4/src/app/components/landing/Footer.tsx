import FooterButton from "./FooterButton";

const Footer = () => {
    const footerItems: string[] = ["LINKEDIN", "INSTAGRAM", "GITHUB"];

    return (
        <div className="flex flex-col">
            <div className="w-full h-[5.2em] border-t-2 border-white text-cbrown ">
                <div className="w-0.5 h-[16em] bottom-[2em] right-[6em] font-black bg-white absolute" />
                <div className="h-full flex flex-row items-center">
                    <div className="w-4/12 h-full items-center flex"></div>
                    <div className="flex flex-row justify-between w-8/12 text-xs">
                        {footerItems.map((item, index) => {
                            return (
                                <FooterButton key={item + index} name={item} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
