import Arrow from "../elements/Arrow";

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
                        <div className="text-zinc-400 text-sm -mt-0.5">
                            {title}
                        </div>
                        <div className="text-zinc-400 w-max bg-zinc-700 py-0.5 px-2 mt-1 rounded-md text-xs">
                            {duration}
                        </div>
                    </div>
                    <Arrow />
                </div>
            </a>
        </div>
    );
};

export default ExperienceCard;
