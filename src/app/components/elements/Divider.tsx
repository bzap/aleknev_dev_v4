import React from "react";

import classNames from "classnames";

interface DividerProps {
    bottomMargin?: boolean;
}

const Divider = ({ bottomMargin }: DividerProps) => {
    const dividerClassname: string = classNames(
        "h-0.5 rounded-xl dark:bg-zinc-800 mt-4 bg-zinc-200",
        {
            "mb-4": bottomMargin,
        }
    );

    return <div className={dividerClassname} />;
};

export default Divider;
