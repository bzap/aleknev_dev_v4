import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

const ProjectCard = () => {
    return (
        <div>
            <div className="text-stone-300 cursor-pointer text-sm group hover:bg-stone-900 rounded-md transition py-2 w-[104%] flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="font-bold">Mrkdwn</div>
                    <div className="text-stone-500">
                        A minimal markdown editor with a live preview.
                    </div>
                </div>
                <div className="group-hover:rotate-45 transition">
                    <ArrowUpRight size={20} fill="#d6d3d1" />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
