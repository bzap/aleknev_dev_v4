import React from "react";

import SectionContainer from "../elements/SectionContainer";

const Header = () => {
    return (
        <SectionContainer delay={0}>
            <div className="flex h-full items-center border-b-zinc-200 flex w-full justify-between">
                <div className="flex flex-row items-center justify-center">
                    <span className="text-zinc-600 font-spectral dark:text-zinc-300 text-4xl">
                        ✦&nbsp;LINAS ALEKNEVIČIUS
                    </span>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Header;
