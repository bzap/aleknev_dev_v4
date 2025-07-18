import React from "react";

import SectionContainer from "../elements/SectionContainer";
import DarkModeButton from "./DarkModeButton";

import { socials } from "../../resources/footers";

const Footer = () => {
    return (
        <SectionContainer delay={600}>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    {socials.map(({ name, link, icon }) => {
                        return (
                            <a
                                key={name}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div>{icon}</div>
                            </a>
                        );
                    })}
                </div>
                <DarkModeButton />
            </div>
        </SectionContainer>
    );
};

export default Footer;
