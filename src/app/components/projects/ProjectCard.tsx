import Arrow from "../elements/Arrow";

interface ProjectProp {
    name: string;
    desc: string;
    link: string;
}

const ProjectCard = ({ name, desc, link }: ProjectProp) => {
    return (
        <div className="group cursor-pointer justify-center items-center">
            <a href={link} target="_blank">
                <div className="p-5 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 text-sm group md:hover:bg-zinc-200 md:active:bg-zinc-300 dark:md:hover:bg-zinc-800 dark:md:active:bg-zinc-900 transition rounded-2xl py-3 w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-bold text-md">{name}</span>
                        <span className="text-zinc-400 dark:text-zinc-400 text-xs font-medium">
                            {desc}
                        </span>
                    </div>
                    <Arrow />
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
