import { experiences } from "@/app/resources/experienceList";
import ExperienceCard from "./ExperienceCard";
import { LineSegment } from "@phosphor-icons/react/dist/ssr/LineSegment";

const Experience = () => {
    return (
        <div className="animate-slidein [--slidein-delay:300ms] opacity-0 w-full">
            <div className="text-zinc-200 text-md font-bold pb-2 border-b-zinc-800 border-b-[1px] pt-4">
                Recent experiences
            </div>
            <div className="text-white pt-2 flex justify-center w-full flex-col">
                {experiences.map((item, index) => {
                    return (
                        <div className="flex flex-row gap-8">
                            <div className="mt-[15px]">
                                <div className="w-3 h-3 bg-zinc-500 rounded-full" />
                                {index < Object.keys(experiences).length - 1 ? (
                                    <div className="h-[110%] w-2 border-l-[4px] border-zinc-700 ml-1" />
                                ) : (
                                    <div className="h-[65%] w-2 border-l-[4px] border-dotted border-zinc-700 ml-1" />
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
