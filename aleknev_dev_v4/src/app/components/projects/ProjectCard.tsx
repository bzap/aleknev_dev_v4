import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

type ProjectProp = {
    name: string;
    desc: string;
    link: string;
};

const ProjectCard = ({ name, desc, link }: ProjectProp) => {
    return (
        <div className="group cursor-pointer justify-center items-center -mx-4">
            <a href={link} target="_blank">
                <div className="text-zinc-200 text-sm group hover:bg-zinc-800 active:bg-zinc-900 transition rounded-lg py-3 w-full flex justify-between items-center pl-4 pr-3">
                    <div className="flex flex-col">
                        <div className="font-bold">{name}</div>
                        <div className="text-zinc-400">{desc}</div>
                    </div>
                    <div className="group-hover:rotate-45 transition pl-2">
                        <ArrowUpRight size={20} fill="#a1a1aa" />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
