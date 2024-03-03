import { socials, contact } from "../resources/footerList";

const Footer = () => {
    const footerItemStyle: string =
        "justify-center items-center flex flex-row text-zinc-400 text-sm hover:text-zinc-300 active:text-zinc-500 transition-all group";

    return (
        <div className="flex flex-col border-t-[1px] pt-4 mt-4 pb-12 border-t-zinc-800">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-6">
                    {socials.map((item, index) => {
                        return (
                            <a
                                key={item.name + index}
                                href={item.link}
                                target="_blank"
                            >
                                <div className={`${footerItemStyle}`}>
                                    {item.icon}
                                    {item.name}
                                </div>
                            </a>
                        );
                    })}
                </div>
                <a href={contact.link}>
                    <div className={`${footerItemStyle}`}>
                        {contact.icon}
                        {contact.name}
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Footer;
