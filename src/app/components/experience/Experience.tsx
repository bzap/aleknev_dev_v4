import { experiences } from "@/app/resources/experiences";
import ExperienceCard from "./ExperienceCard";
import SectionContainer from "../elements/SectionContainer";

const Experience = () => {
    return (
        <SectionContainer delay={300} header="RECENT EXPERIENCES">
            <div className="pt-2 flex justify-center w-full flex-col">
                {experiences.map(
                    ({ workplace, title, duration, link }, index) => {
                        return (
                            <div
                                key={workplace}
                                className="flex flex-row gap-8 group"
                            >
                                <div className="mt-[15px]">
                                    <div className="w-3 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full group-hover:scale-125 transition duration-300" />
                                    {index <
                                    Object.keys(experiences).length - 1 ? (
                                        <div className="h-[110%] w-2 border-l-[4px] border-zinc-300 dark:border-zinc-700 ml-1" />
                                    ) : (
                                        <div className="h-[65%] w-2 border-l-[4px] border-dotted border-zinc-300 dark:border-zinc-700 ml-1" />
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
