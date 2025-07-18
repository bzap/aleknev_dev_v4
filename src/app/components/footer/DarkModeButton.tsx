"use client";

import React from "react";

import { MoonStars } from "@phosphor-icons/react/dist/ssr/MoonStars";
import { Sun } from "@phosphor-icons/react/dist/ssr/Sun";
import { useEffect, useState } from "react";

import { iconClass } from "@/app/resources/footers";

const DarkModeButton = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    useEffect(() => {
        if (isToggled) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [isToggled]);

    return (
        <div className="pointer transition-all slide-in h-full items-center flex">
            <button onClick={() => setIsToggled((prevState) => !prevState)}>
                {isToggled ? (
                    <MoonStars
                        size={16}
                        weight="bold"
                        className={iconClass}
                    />
                ) : (
                    <Sun size={16} weight="bold" className={iconClass} />
                )}
            </button>
        </div>
    );
};

export default DarkModeButton;
