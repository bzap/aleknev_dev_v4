"use client";
import { Moon } from "@phosphor-icons/react/dist/ssr/Moon";
import { Sun } from "@phosphor-icons/react/dist/ssr/Sun";
import { useEffect, useState } from "react";

const iconClassName: string =
    "fill-zinc-400 dark:fill-zinc-500 hover:fill-zinc-800 dark:hover:fill-zinc-400 active:fill-zinc-300 dark:active:fill-zinc-600 transition select-none";

const ToggleButton = () => {
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
                {!isToggled ? (
                    <Sun size={24} weight="bold" className={iconClassName} />
                ) : (
                    <Moon size={24} weight="bold" className={iconClassName} />
                )}
            </button>
        </div>
    );
};

export default ToggleButton;
