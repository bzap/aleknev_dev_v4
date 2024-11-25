import { socials, contact } from "../resources/footers";

const Footer = () => {
    const footerItemStyle: string =
        "justify-center items-center flex flex-row text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-800 active:text-zinc-400 dark:hover:text-zinc-300 dark:active:text-zinc-500 transition-all group";

    return (
        <div className="animate-slidein [--slidein-delay:600ms] opacity-0 flex flex-col border-t-[1px] pt-3 mt-4 pb-12 border-t-zinc-200 dark:border-t-zinc-800">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row base:gap-2 md:gap-6">
                    {socials.map((item, index) => {
                        return (
                            <a
                                key={item.name + index}
                                href={item.link}
                                target="_blank"
                            >
                                <div className={`${footerItemStyle}`}>
                                    {item.icon}
                                    <div className="base:hidden md:block">
                                        {item.name}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
                <a href={contact.link}>
                    <div className={`${footerItemStyle}`}>
                        {contact.icon}
                        <div className="base:hidden md:block">
                            {contact.name}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Footer;
