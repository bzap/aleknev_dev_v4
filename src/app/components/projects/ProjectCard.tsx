import React from "react";

import Arrow from "../elements/Arrow";

interface ProjectProp {
    name: string;
    desc: string;
    link: string;
}

const ProjectCard = ({ name, desc, link }: ProjectProp) => {
    return (
        <div className="group cursor-pointer justify-center items-center">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="p-7 text-zinc-500 dark:bg-zinc-800 border-transparent border-2 bg-zinc-200 hover:border-zinc-300 hover:dark:border-zinc-500 dark:text-zinc-300 text-sm group md:hover:bg-zinc-200 md:active:bg-zinc-300 dark:md:hover:bg-zinc-800 dark:md:active:bg-zinc-900 transition rounded-2xl w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-zinc-600 dark:text-zinc-300 font-spectral tracking-wide text-nowrap mb-1.5">
                            {name}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400 text-[13px]">
                            {desc}
                        </span>
                    </div>
                    <div className="relative bottom-unset sm:bottom-6">
                        <Arrow />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
