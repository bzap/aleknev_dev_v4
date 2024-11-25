import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

const Arrow = () => {
    return (
        <div className="md:group-hover:rotate-45 transition">
            <ArrowUpRight
                size={20}
                className="fill-zinc-400 dark:fill-zinc-500 group-hover:dark:fill-zinc-200 group-hover:fill-zinc-600 transition"
            />
        </div>
    );
};

export default Arrow;
