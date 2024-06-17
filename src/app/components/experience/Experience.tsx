import { experiences } from "@/app/resources/experienceList";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <div className="animate-slidein [--slidein-delay:300ms] opacity-0 w-full">
            <div className="text-zinc-500 dark:text-zinc-200 text-md font-bold pb-2 border-b-zinc-200 dark:border-b-zinc-800 border-b-[1px] pt-4">
                Recent experiences
            </div>
            <div className="pt-2 flex justify-center w-full flex-col">
                {experiences.map((item, index) => {
                    return (
                        <div className="flex flex-row gap-8 group">
                            <div className="mt-[15px]">
                                <div className="w-3 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full group-hover:scale-125 transition duration-300" />
                                {index < Object.keys(experiences).length - 1 ? (
                                    <div className="h-[110%] w-2 border-l-[4px] border-zinc-300 dark:border-zinc-700 ml-1" />
                                ) : (
                                    <div className="h-[65%] w-2 border-l-[4px] border-dotted border-zinc-300 dark:border-zinc-700 ml-1" />
                                )}
                            </div>
                            <ExperienceCard
                                key={item.workplace + index}
                                workplace={item.workplace}
                                title={item.title}
                                duration={item.duration}
                                link={item.link}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
