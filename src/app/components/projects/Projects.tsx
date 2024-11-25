import SectionContainer from "../elements/SectionContainer";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/resources/projects";

const Projects = () => {
    return (
        <SectionContainer delay={450} header="A FEW PROJECTS">
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
        </SectionContainer>
    );
};

export default Projects;
