"use client";

import React from "react";

import { MoonStars } from "@phosphor-icons/react/dist/ssr/MoonStars";
import { Sun } from "@phosphor-icons/react/dist/ssr/Sun";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const iconClassName: string =
        "fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-800 dark:hover:fill-zinc-300 dark:hover:rotate-45 hover:rotate-12 active:fill-zinc-300 dark:active:fill-zinc-500 transition-all";

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
                        size={18}
                        weight="bold"
                        className={iconClassName}
                    />
                ) : (
                    <Sun size={18} weight="bold" className={iconClassName} />
                )}
            </button>
        </div>
    );
};

export default DarkModeButton;
