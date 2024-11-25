import SectionContainer from "../elements/SectionContainer";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/resources/projects";

const Projects = () => {
    return (
        <SectionContainer delay={450} header="A few projects">
            <div className="grid base:grid-cols-2 sm:grid-cols-3 gap-4 justify-center w-full">
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
