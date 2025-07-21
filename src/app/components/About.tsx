import React from "react";

import SectionContainer from "./elements/SectionContainer";

const highlightedTextClassName: string =
    "px-1 text-zinc-400 hover:text-zinc-800 active:text-zinc-300 dark:text-zinc-300 dark:hover:text-zinc-100 dark:active:text-zinc-300 transition-all";

const About = () => {
    return (
        <SectionContainer delay={150}>
            <div className="text-[13px] text-zinc-500 dark:text-zinc-400">
                <p>
                    In a world that never stops evolving — I try to keep moving forward.
                    I’m a developer shaped by that motion, driven to continue learning and improving.
                </p>
                <br />
                <p>Always thankful for past experiences, always grateful for new opportunities.</p>
                <br />
                <p>Outside of development, you might find me managing my</p>
                <a
                    className={highlightedTextClassName}
                    href="https://i.imgur.com/JM6ZTAb.jpeg"
                    target="_blank"
                    rel="noreferrer"
                >
                    fantasy
                </a>
                <span>basketball roster,</span>
                <a
                    className={highlightedTextClassName}
                    href="https://www.youtube.com/watch?v=urRVZ4SW7WU"
                    target="_blank"
                    rel="noreferrer"
                >
                    bouldering
                </a>
                <span>or furthering my quest for the</span>
                <a
                    className={`pl-1 ${highlightedTextClassName}`}
                    href="https://i.imgur.com/FRyzXU5.jpeg"
                    target="_blank"
                    rel="noreferrer"
                >
                    endgame
                </a>
                <span>keyboard.</span>
            </div>
        </SectionContainer>
    );
};

export default About;
