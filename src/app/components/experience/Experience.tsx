import { experiences } from "@/app/resources/experienceList";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    // const max = Object.keys(experiences).length - 1;
    return (
        <div className="animate-slidein [--slidein-delay:300ms] opacity-0 w-full">
            <div className="text-zinc-200 text-md font-bold pb-2 border-b-zinc-800 border-b-[1px] pt-4">
                Recent experiences
            </div>
            <div className="text-white pt-2 flex justify-center w-full flex-col">
                {experiences.map((item, index) => {
                    return (
                        <ExperienceCard
                            key={item.workplace + index}
                            workplace={item.workplace}
                            title={item.title}
                            duration={item.duration}
                            link={item.link}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
