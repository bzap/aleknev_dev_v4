import Arrow from "../elements/Arrow";

type ProjectProp = {
    name: string;
    desc: string;
    link: string;
};

const ProjectCard = ({ name, desc, link }: ProjectProp) => {
    return (
        <div className="group cursor-pointer justify-center items-center -mx-4">
            <a href={link} target="_blank">
                <div className="text-zinc-500 dark:text-zinc-200 text-sm group md:hover:bg-zinc-200 md:active:bg-zinc-300 dark:md:hover:bg-zinc-800 dark:md:active:bg-zinc-900 transition rounded-lg py-3 w-full flex justify-between items-center pl-4 pr-3">
                    <div className="flex flex-col">
                        <div className="font-bold">{name}</div>
                        <div className="text-zinc-400 dark:text-zinc-400">
                            {desc}
                        </div>
                    </div>
                    <Arrow />
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
