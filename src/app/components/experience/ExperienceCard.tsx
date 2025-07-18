import React from "react";

import Arrow from "../elements/Arrow";

interface ExperienceProp {
    workplace: string;
    title: string;
    duration: string;
    link: string;
}

const ExperienceCard = ({
    workplace,
    title,
    duration,
    link,
}: ExperienceProp) => {
    return (
        <div className="group cursor-pointer justify-center items-center w-full">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="p-6 sm:p-7 text-zinc-500 bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 border-transparent border-2 hover:border-zinc-300 dark:hover:border-zinc-500 text-sm md:hover:bg-zinc-200 md:active:bg-zinc-300 dark:md:hover:bg-zinc-800 dark:md:active:bg-zinc-900 transition rounded-2xl w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-lg dark:text-zinc-300 tracking-wider text-zinc-600 font-spectral mb-3">
                            {workplace}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400 text-[13px]">
                            {title}
                        </span>
                        <span className="text-zinc-100 dark:text-zinc-400 w-max bg-zinc-400 dark:bg-zinc-700 px-2 py-0.5 tracking-wider mt-1.5 rounded-md text-[10px]">
                            {duration}
                        </span>
                    </div>
                    <Arrow />
                </div>
            </a>
        </div>
    );
};

export default ExperienceCard;
