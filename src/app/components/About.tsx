import { Smiley } from "@phosphor-icons/react/dist/ssr/Smiley";

const highlightedTextClassName: string =
    "px-1 text-zinc-400 hover:text-zinc-800 active:text-zinc-300 dark:text-zinc-300 dark:hover:text-zinc-100 dark:active:text-zinc-300 transition-all";

const About = () => {
    return (
        <div className="animate-slidein [--slidein-delay:150ms] opacity-0 flex flex-col w-full z-30">
            <div className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="inline-block">
                    Just a curious and hardworking dev working their way through
                    a complicated world
                    <Smiley
                        size={14.5}
                        weight="fill"
                        className="inline-block mb-0.5 ml-1"
                    />
                    . I focus on building thorough, accessible, and efficient
                    experiences across all of my work.
                    <br />
                    <br />
                    When I&apos;m not developing, I might be managing my
                    <a
                        className={highlightedTextClassName}
                        href="https://i.imgur.com/JM6ZTAb.jpeg"
                        target="_blank"
                    >
                        fantasy basketball
                    </a>
                    roster,
                    <a
                        className={highlightedTextClassName}
                        href="https://www.youtube.com/watch?v=urRVZ4SW7WU"
                        target="_blank"
                    >
                        bouldering
                    </a>
                    or furthering my quest for the
                    <a
                        className={`pl-1 ${highlightedTextClassName}`}
                        href="https://i.imgur.com/FRyzXU5.jpeg"
                        target="_blank"
                    >
                        endgame keyboard.
                    </a>
                    Ask me about my current builds (or past ones)!
                </div>
            </div>
        </div>
    );
};

export default About;
