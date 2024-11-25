import Arrow from "../elements/Arrow";

interface ExperienceProp {
    workplace: string;
    title: string;
    duration: string;
    link: string;
}

const ExperienceCard = ({
    workplace,
    title,
    duration,
    link,
}: ExperienceProp) => {
    return (
        <div className="group cursor-pointer justify-center items-center w-full">
            <a href={link} target="_blank">
                <div className="text-zinc-500 bg-zinc-800 dark:text-zinc-300 text-sm md:hover:bg-zinc-200 md:active:bg-zinc-300 dark:md:hover:bg-zinc-800 dark:md:active:bg-zinc-900 transition rounded-2xl px-5 py-4 w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="font-bold">{workplace}</div>
                        <span className="text-zinc-400 dark:text-zinc-400 text-xs font-medium">
                            {title}
                        </span>
                        <span className="text-zinc-100 font-semibold dark:text-zinc-400 w-max bg-zinc-400 dark:bg-zinc-700 px-2 mt-2 rounded-md text-[0.65rem]">
                            {duration}
                        </span>
                    </div>
                    <Arrow />
                </div>
            </a>
        </div>
    );
};

export default ExperienceCard;
