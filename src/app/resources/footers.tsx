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

type GithubLogoProps = {
  size: number;
  weight?: 'bold',
  className: string;
}

export const iconClass: string =
    "fill-zinc-400 dark:fill-zinc-700 hover:rotate-12 hover:fill-zinc-800 dark:hover:fill-zinc-300 active:fill-zinc-300 dark:active:fill-zinc-500 transition-all";

const iconProps: GithubLogoProps = {
    size: 15,
    className: iconClass,
    weight: 'bold'
};

export const socials: SocialType = [
    {
        name: "Github",
        icon: <GithubLogo {...iconProps} />,
        link: "https://github.com/bzap",
    },
    {
        name: "Instagram",
        icon: <InstagramLogo {...iconProps} />,
        link: "https://instagram.com/l.aleknev",
    },
    {
        name: "LinkedIn",
        icon: <LinkedinLogo {...iconProps} />,
        link: "https://www.linkedin.com/in/linasalekne/",
    },
    {
        name: "Contact",
        icon: <EnvelopeSimpleOpen {...iconProps} />,
        link: "mailto:linasalekne@gmail.com",
    },
];
