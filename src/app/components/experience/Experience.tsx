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
                                className="flex flex-row base:gap-8 md:gap-10 group"
                            >
                                <div className="mt-[35px]">
                                    <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full border-zinc-400 dark:border-zinc-600 group-hover:dark:bg-zinc-400 group-hover:bg-zinc-500 transition" />
                                    {index < experiencesLength ? (
                                        <div className="h-[150%] border-l-4 border-zinc-300 dark:border-zinc-800 ml-0.5" />
                                    ) : (
                                        <div className="h-[50%] border-l-4 border-dotted border-zinc-300 dark:border-zinc-800 ml-0.5" />
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
