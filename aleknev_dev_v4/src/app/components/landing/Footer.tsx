import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

const Footer = () => {
    const footerItems: string[] = ["LINKEDIN", "INSTAGRAM", "GITHUB"];

    return (
        <div className="flex flex-col border-t-2 pt-4 border-t-stone-900">
            <div className="flex flex-row justify-between  text-stone-500 text-sm">
                <div className="flex flex-row text-white gap-6">
                    <div className="justify-center items-center flex flex-row  text-stone-500 text-sm">
                        <LinkedinLogo
                            fill="#78716c"
                            size={16}
                            className="mr-1"
                        />
                        Linkedin
                    </div>
                    <div className="justify-center items-center flex flex-row  text-stone-500 text-sm">
                        <InstagramLogo
                            fill="#78716c"
                            size={16}
                            className="mr-1"
                        />
                        Instagram
                    </div>
                    <div className="justify-center items-center flex flex-row  text-stone-500 text-sm">
                        <GithubLogo fill="#78716c" size={16} className="mr-1" />
                        Github
                    </div>
                </div>
                <div>V1.0.0 - 02/2024</div>
            </div>
        </div>
    );
};

export default Footer;
