import { Smiley } from "@phosphor-icons/react/dist/ssr/Smiley";

const About = () => {
    return (
        <div className="animate-slidein [--slidein-delay:150ms] opacity-0 flex flex-col w-full z-30">
            <div className="flex flex-col gap-4 text-sm text-zinc-400">
                <div className="inline-block">
                    Just a curious and hardworking dev working his way through
                    this complicated world
                    <Smiley
                        size={14.5}
                        weight="fill"
                        className="inline-block mb-0.5 ml-1"
                    />
                    . I focus on building thorough, accessible, and efficient
                    experiences across all of my work.
                    <br />
                    <br />
                    {/* While I try to constantly challenge myself and take pride in
                    a diverse range of skills, I happen to have a soft spot for
                    <span className="text-zinc-300"> front-end</span> designs
                    and implementations. There&apos;s just something satisfying
                    about bridging the gap between what the developer sees and
                    what the user experiences. A well thought out, lively
                    interface makes the interaction feel
                    <span className="text-zinc-300"> humanized</span> and less
                    of a machined process. I strive to achieve that.
                    <br />
                    <br /> */}
                    When I&apos;m not developing, I might be managing my
                    <a
                        className="px-1 text-zinc-300 hover:text-zinc-100 transition-all"
                        href="https://basketball.fantasysports.yahoo.com/"
                        target="_blank"
                    >
                        fantasy basketball
                    </a>
                    roster,
                    <a
                        className="px-1 text-zinc-300 hover:text-zinc-100 transition-all"
                        href="https://www.youtube.com/watch?v=urRVZ4SW7WU"
                        target="_blank"
                    >
                        bouldering
                    </a>
                    or furthering my quest for the
                    <a
                        className="pl-1 text-zinc-300 hover:text-zinc-100 transition-all"
                        href="https://i.redd.it/198hy5hxq1a71.jpg"
                        target="_blank"
                    >
                        endgame keyboard
                    </a>
                    . Ask me about my current builds (or past ones)!
                </div>
            </div>
        </div>
    );
};

export default About;
