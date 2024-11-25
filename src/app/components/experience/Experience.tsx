import { experiences } from "@/app/resources/experiences";
import ExperienceCard from "./ExperienceCard";
import SectionContainer from "../elements/SectionContainer";

const Experience = () => {
    return (
        <SectionContainer delay={300} header="Experience">
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
                                <div className="mt-[20px]">
                                    <div className="w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full group-hover:scale-125 border-2 border-zinc-400 dark:border-zinc-600 group-hover:dark:border-zinc-400 group-hover:border-zinc-300 transition" />
                                    {index < experiencesLength ? (
                                        <div className="h-[140%] border-l-4 border-zinc-300 dark:border-zinc-800 ml-1" />
                                    ) : (
                                        <div className="h-[70%] border-l-4 border-dotted border-zinc-300 dark:border-zinc-800 ml-1" />
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
