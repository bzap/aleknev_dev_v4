import ProjectCard from "./ProjectCard";
import { projects } from "@/app/resources/projectList";

const Projects = () => {
    return (
        <div className="w-full ">
            <div className="text-stone-300 font-bold border-b-[1px] pb-2 border-b-stone-800">
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
