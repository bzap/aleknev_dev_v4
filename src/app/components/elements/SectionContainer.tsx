import classNames from "classnames";

interface SectionProp {
    delay: number;
    children: React.ReactNode;
    header?: string;
}

const SectionContainer = ({ delay, children, header }: SectionProp) => {
    const containerClassname: string = classNames(
        "animate-slidein opacity-0 flex flex-col w-full z-30 pb-2",
        {
            "[--slidein-delay:0ms]": delay === 0,
            "[--slidein-delay:150ms]": delay === 150,
            "[--slidein-delay:300ms]": delay === 300,
            "[--slidein-delay:450ms]": delay === 450,
            "[--slidein-delay:600ms]": delay === 600,
        }
    );

    return (
        <div className={containerClassname}>
            {header && (
                <>
                    <span className="text-zinc-500 dark:text-zinc-300 text-md font-black pb-4">
                        {header}
                    </span>
                </>
            )}
            <div>{children}</div>
        </div>
    );
};

export default SectionContainer;
