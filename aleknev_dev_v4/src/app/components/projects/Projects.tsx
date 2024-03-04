import ProjectCard from "./ProjectCard";
import { projects } from "@/app/resources/projectList";

const Projects = () => {
    return (
        <div className="animate-slidein [--slidein-delay:300ms] opacity-0 w-full">
            <div className="text-zinc-200 text-md font-bold pb-3 border-b-zinc-800 border-b-[1px] pt-4">
                Projects
            </div>
            <div className="text-white pt-4 flex justify-center w-full flex-col">
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
