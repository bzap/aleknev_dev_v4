import SectionContainer from "./elements/SectionContainer";

const highlightedTextClassName: string =
    "px-1 text-zinc-400 hover:text-zinc-800 active:text-zinc-300 dark:text-zinc-300 dark:hover:text-zinc-100 dark:active:text-zinc-300 transition-all";

const About = () => {
    return (
        <SectionContainer delay={150}>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <span>
                    Just a curious and hardworking dev making their way through
                    a busy world. I focus on building thorough and natural
                    experiences across all of my work.
                </span>
                <br />
                <br />
                <span>
                    Outside of development, you might find me managing my
                </span>
                <a
                    className={highlightedTextClassName}
                    href="https://i.imgur.com/JM6ZTAb.jpeg"
                    target="_blank"
                >
                    fantasy
                </a>
                <span>basketball roster,</span>
                <a
                    className={highlightedTextClassName}
                    href="https://www.youtube.com/watch?v=urRVZ4SW7WU"
                    target="_blank"
                >
                    bouldering
                </a>
                <span>or furthering my quest for the</span>
                <a
                    className={`pl-1 ${highlightedTextClassName}`}
                    href="https://i.imgur.com/FRyzXU5.jpeg"
                    target="_blank"
                >
                    endgame
                </a>
                <span>keyboard.</span>
            </div>
        </SectionContainer>
    );
};

export default About;
