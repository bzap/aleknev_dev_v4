import React from "react";

import Image from "next/image";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import Divider from "../elements/Divider";
import SectionContainer from "../elements/SectionContainer";

const Header = () => {
    return (
        <SectionContainer delay={0}>
            <div className="flex h-full items-center border-b-zinc-200 flex w-full justify-between">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col">
                        <span className="text-zinc-600 font-spectral dark:text-zinc-300 text-4xl antialiased">
                            ✦ LINAS ALEKNEVICIUS
                        </span>
                    </div>
                </div>
            </div>
            <Divider />
        </SectionContainer>
    );
};

export default Header;
