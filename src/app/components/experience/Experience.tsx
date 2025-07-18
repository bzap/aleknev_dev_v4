import React from "react";

import { experiences } from "@/app/resources/experiences";
import ExperienceCard from "./ExperienceCard";
import SectionContainer from "../elements/SectionContainer";

const Experience = () => {
    return (
        <SectionContainer delay={300} header="EXPERIENCE">
            <div className="flex justify-center w-full flex-col gap-4">
                {experiences.map(
                    ({ workplace, title, duration, link }, index) => {
                        const experiencesLength =
                            Object.keys(experiences).length - 1;

                        return (
                            <div
                                key={workplace}
                                className="flex flex-row gap-8 group"
                            >
                                <div className="sm:block hidden mt-[36px]">
                                    <div className="w-3 h-3 bg-zinc-400  dark:bg-zinc-600 rounded-full border-zinc-400 dark:border-zinc-600 relative z-20 group-hover:dark:bg-zinc-400 group-hover:bg-zinc-500 transition" />
                                    {index < experiencesLength ? (
                                        <div className="h-[154%] relative z-10 border-l-[8px] border-5 border-solid border-zinc-300 dark:border-zinc-800 ml-0.5 -mt-1" />
                                    ) : (
                                        <div className="h-[58%] border-l-[8px] relative z-10 border-dotted border-zinc-300 dark:border-zinc-800 ml-0.5" />
                                    )}
                                </div>
                                <ExperienceCard
                                    workplace={workplace}
                                    title={title}
                                    duration={duration}
                                    link={link}
                                />
                            </div>
                        );
                    }
                )}
            </div>
        </SectionContainer>
    );
};

export default Experience;
