import React from "react";

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

const iconClass: string =
    "fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-800 dark:hover:fill-zinc-300 hover:-mt-1 active:fill-zinc-300 dark:active:fill-zinc-500 transition-all";

export const socials: SocialType = [
    {
        name: "Github",
        icon: <GithubLogo size={16} className={iconClass} weight="bold" />,
        link: "https://github.com/bzap",
    },
    {
        name: "Instagram",
        icon: <InstagramLogo size={16} className={iconClass} weight="bold" />,
        link: "https://instagram.com/l.aleknev",
    },
    {
        name: "LinkedIn",
        icon: <LinkedinLogo size={16} className={iconClass} weight="bold" />,
        link: "https://www.linkedin.com/in/linasalekne/",
    },
    {
        name: "Contact",
        icon: (
            <EnvelopeSimpleOpen size={16} className={iconClass} weight="bold" />
        ),
        link: "mailto:linasalekne@gmail.com",
    },
];
