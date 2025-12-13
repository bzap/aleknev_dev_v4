import React from "react";

import SectionContainer from "./elements/SectionContainer";

const highlightedTextClassName: string =
    "px-1 text-zinc-400 hover:text-zinc-800 active:text-zinc-300 dark:text-zinc-300 dark:hover:text-zinc-100 dark:active:text-zinc-300 transition-all";

const About = () => {
    return (
        <SectionContainer delay={150}>
            <div className="text-[13px] text-zinc-500 dark:text-zinc-400 flex flex-col gap-2 -mt-4">
                <p>
                    Always thankful for past experiences, always grateful for
                    new opportunities.
                </p>
                <p>
                    Outside of development you might find me managing
                    <a
                        className={highlightedTextClassName}
                        href="https://i.imgur.com/JM6ZTAb.jpeg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        fantasy
                    </a>
                    basketball roster,
                    <a
                        className={highlightedTextClassName}
                        href="https://www.youtube.com/watch?v=urRVZ4SW7WU"
                        target="_blank"
                        rel="noreferrer"
                    >
                        bouldering
                    </a>
                    or furthering my quest for the
                    <a
                        className={`pl-1 ${highlightedTextClassName}`}
                        href="https://i.imgur.com/FRyzXU5.jpeg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        endgame
                    </a>
                    keyboard.
                </p>
            </div>
        </SectionContainer>
    );
};

export default About;
