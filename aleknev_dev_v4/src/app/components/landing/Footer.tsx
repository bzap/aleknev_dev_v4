const Footer = () => {
    const footerItems: string[] = ["LINKEDIN", "INSTAGRAM", "GITHUB"];

    return (
        <div className="flex flex-col">
            <div className="h-full flex flex-row items-center">
                <div className="w-4/12 h-full items-center flex"></div>
                <div className="flex flex-row justify-between w-8/12 text-xs">
                    {footerItems.map((item, index) => {
                        return <div>lol </div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;
