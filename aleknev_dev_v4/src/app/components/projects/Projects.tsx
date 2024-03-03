import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="w-full">
            <div className="pt-8 text-stone-300 font-bold border-b-[1px] pb-4 border-b-stone-800">
                Projects
            </div>
            <div className="text-white pt-4 flex justify-center w-full flex-col">
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};

export default Projects;
