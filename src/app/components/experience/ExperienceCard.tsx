import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

type ExperienceProp = {
    workplace: string;
    title: string;
    duration: string;
    link: string;
};

const ExperienceCard = ({
    workplace,
    title,
    duration,
    link,
}: ExperienceProp) => {
    return (
        <div className="group cursor-pointer justify-center items-center -mx-4 w-full">
            <a href={link} target="_blank">
                <div className="text-zinc-200 text-sm group md:hover:bg-zinc-800 active:bg-zinc-900 transition rounded-lg py-3 w-full flex justify-between items-center pl-4 pr-3">
                    <div className="flex flex-col">
                        <div className="font-bold">{workplace}</div>
                        <div className="text-zinc-400">{title}</div>
                        <div className="text-zinc-400 w-max bg-zinc-700 py-0.5 px-2 mt-0.5 rounded-md text-xs">
                            {duration}
                        </div>
                    </div>
                    <div className="md:group-hover:rotate-45 transition pl-2">
                        <ArrowUpRight size={20} fill="#a1a1aa" />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ExperienceCard;
