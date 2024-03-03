import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

const Footer = () => {
    const footerItemStyle =
        "justify-center items-center flex flex-row text-zinc-500 text-sm";

    return (
        <div className="flex flex-col border-t-2 pt-4 pb-12 border-t-zinc-900">
            <div className="flex flex-row justify-between text-zinc-500 text-sm">
                <div className="flex flex-row text-white gap-6">
                    <div className={`${footerItemStyle}`}>
                        <LinkedinLogo
                            fill="#a8a29e"
                            size={16}
                            className="mr-1"
                        />
                        Linkedin
                    </div>
                    <div className={`${footerItemStyle}`}>
                        <InstagramLogo
                            fill="#a8a29e"
                            size={16}
                            className="mr-1"
                        />
                        Instagram
                    </div>
                    <div className={`${footerItemStyle}`}>
                        <GithubLogo fill="#a8a29e" size={16} className="mr-1" />
                        Github
                    </div>
                </div>
                <div>V1.0.0 - 02/2024</div>
            </div>
        </div>
    );
};

export default Footer;
