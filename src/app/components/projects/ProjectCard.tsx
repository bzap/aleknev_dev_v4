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
                <div className="p-5 text-zinc-500 dark:bg-zinc-800 border-transparent border-2 bg-zinc-200 hover:border-zinc-300 hover:dark:border-zinc-500 dark:text-zinc-300 text-sm group md:hover:bg-zinc-200 md:active:bg-zinc-300 dark:md:hover:bg-zinc-800 dark:md:active:bg-zinc-900 transition rounded-2xl py-3 w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-bold text-md text-zinc-600 dark:text-zinc-300">
                            {name}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400 text-xs font-medium">
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
