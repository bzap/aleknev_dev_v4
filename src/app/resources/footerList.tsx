import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { EnvelopeSimpleOpen } from "@phosphor-icons/react/dist/ssr/EnvelopeSimpleOpen";
import { ReactNode } from "react";

type SocialType = {
    name: string;
    icon: ReactNode;
    link: string;
}[];

type ContactType = {
    name: string;
    icon: ReactNode;
    link: string;
};

const iconClass: string =
    "mr-1 group-hover:mb-1 fill-zinc-400 group-hover:fill-zinc-300 group-active:fill-zinc-500 transition-all";
export const socials: SocialType = [
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
        link: "https://www.linkedin.com/in/linasalekne/",
    },
];

export const contact: ContactType = {
    name: "Contact",
    icon: <EnvelopeSimpleOpen size={15} className={`${iconClass}`} />,
    link: "mailto:linasalekne@gmail.com",
};
