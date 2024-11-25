import Divider from "./Divider";

interface SectionProp {
    delay: number;
    children: React.ReactNode;
    header?: string;
}

const SectionContainer = ({ delay, children, header }: SectionProp) => {
    const containerClassname = `animate-slidein [--slidein-delay:${delay}ms] opacity-0 flex flex-col w-full z-30`;

    return (
        <div className={containerClassname}>
            {header && (
                <>
                    <span className="text-zinc-500 dark:text-zinc-200 text-md font-black">
                        {header}
                    </span>
                    <Divider />
                </>
            )}
            {children}
        </div>
    );
};

export default SectionContainer;
