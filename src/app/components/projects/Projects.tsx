import ProjectCard from "./ProjectCard";
import { projects } from "@/app/resources/projectList";

const Projects = () => {
    return (
        <div className="animate-slidein [--slidein-delay:300ms] opacity-0 w-full">
            <div className="text-zinc-500 dark:text-zinc-200 text-md font-bold pb-2 border-b-zinc-200 dark:border-b-zinc-800 border-b-[1px] pt-4">
                A few projects
            </div>
            <div className="text-white pt-2 flex justify-center w-full flex-col">
                {projects.map((item, index) => {
                    return (
                        <ProjectCard
                            key={item.name + index}
                            name={item.name}
                            desc={item.desc}
                            link={item.link}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
