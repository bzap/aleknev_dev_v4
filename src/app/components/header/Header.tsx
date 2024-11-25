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
                    <div className="relative h-8 w-8 md:h-16 md:w-16 rounded-full mr-4 active:scale-95 cursor-pointer">
                        <Image
                            src={"/memoji.webp"}
                            alt={"/"}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-zinc-600 dark:text-zinc-300 text-2xl antialiased">
                            Linas Aleknevičius
                        </span>
                        <span className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 -mt-0.5">
                            Software Developer
                        </span>
                        <div className="flex flex-row gap-0.5 items-center">
                            <MapPin
                                size={10}
                                weight="fill"
                                className="fill-zinc-400 dark:fill-zinc-500"
                            />
                            <span className="font-semibold text-[0.68rem] text-zinc-400 dark:text-zinc-500">
                                Toronto
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </SectionContainer>
    );
};

export default Header;
