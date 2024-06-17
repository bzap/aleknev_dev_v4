import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

const Arrow = () => {
    return (
        <div className="md:group-hover:rotate-45 transition pl-2">
            <ArrowUpRight
                size={20}
                className="fill-zinc-400 dark:fill-zinc-500"
            />
        </div>
    );
};

export default Arrow;
