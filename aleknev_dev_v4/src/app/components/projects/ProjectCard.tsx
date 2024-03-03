import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

type Project = {
    name: string;
    desc: string;
    link: string;
};

const ProjectCard = ({ name, desc, link }: Project) => {
    return (
        <div className="group cursor-pointer justify-center items-center -mx-4">
            <div className="text-zinc-300 text-sm group hover:bg-zinc-900 transition rounded-lg py-3 w-full flex justify-between items-center px-4">
                <div className="flex flex-col">
                    <div className="font-bold">{name}</div>
                    <div className="text-zinc-500 text-sm">{desc}</div>
                </div>
                <div className="group-hover:rotate-45 transition">
                    <ArrowUpRight size={20} fill="#71717a" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
