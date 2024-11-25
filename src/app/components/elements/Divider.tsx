import classNames from "classnames";

interface DividerProps {
    bottomMargin: boolean;
}

const Divider = ({ bottomMargin }: DividerProps) => {
    const dividerClassname: string = classNames(
        "h-0.5 rounded-xl dark:bg-zinc-800 mt-3 bg-zinc-200",
        {
            "mb-3": bottomMargin,
        }
    );

    return <div className={dividerClassname} />;
};

export default Divider;
