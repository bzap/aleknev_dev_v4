import SectionContainer from "./elements/SectionContainer";

const highlightedTextClassName: string =
    "px-1 whitespace-pre-wrap text-zinc-400 hover:text-zinc-800 active:text-zinc-300 dark:text-zinc-300 dark:hover:text-zinc-100 dark:active:text-zinc-300 transition-all";

const About = () => {
    return (
        <SectionContainer delay={150}>
            <div className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                <p>
                    <span>
                        Just a curious and hardworking dev working their way
                        through a busy world. I focus on building thorough,
                        accessible, and functional experiences across all of my
                        work.
                    </span>
                    <br />
                    <br />
                    <span>
                        When I&apos;m not developing, you might find me managing
                        my
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
                </p>
            </div>
        </SectionContainer>
    );
};

export default About;
