import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { EnvelopeSimpleOpen } from "@phosphor-icons/react/dist/ssr/EnvelopeSimpleOpen";

const iconClass =
    "mr-1 group-hover:mb-1 fill-zinc-400 group-hover:fill-zinc-300 group-active:fill-zinc-500 transition-all";
export const socials = [
    {
        name: "Github",
        icon: <GithubLogo size={15} className={`${iconClass}`} />,
        link: "https://github.com/bzap",
    },
    {
        name: "Instagram",
        icon: <InstagramLogo size={15} className={`${iconClass}`} />,
        link: "https://instagram.com/l.aleknev",
    },
    {
        name: "Linkedin",
        icon: <LinkedinLogo size={15} className={`${iconClass}`} />,
        link: "https://instagram.com/l.aleknev",
    },
];

export const contact = {
    name: "Contact",
    icon: <EnvelopeSimpleOpen size={15} className={`${iconClass}`} />,
    link: "mailto:linasalekne@gmail.com",
};
