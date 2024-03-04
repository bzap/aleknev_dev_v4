const About = () => {
    return (
        <div className="animate-slidein [--slidein-delay:150ms] opacity-0 flex flex-col w-full z-30">
            <div className="flex flex-col gap-4 text-sm text-zinc-400">
                <div className="inline-block">
                    Just a hardworking code writer based in
                    <span className="text-zinc-300"> Toronto</span>. I&apos;m
                    currently working for
                    <a
                        className="pl-1 text-zinc-300 hover:text-zinc-100 transition-all"
                        href="https://aviaproconsulting.ca/"
                        target="_blank"
                    >
                        AviaPro Consulting
                    </a>
                    !
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
                    When I&apos;m not working I might be managing my
                    <span className="text-zinc-300"> fantasy basketball </span>
                    roster,
                    <span className="text-zinc-300"> bouldering </span>
                    or furthering my quest for the
                    <span className="text-zinc-300"> endgame keyboard</span>.
                    The endgame keyboard, in particular, I&apos;ve come to think
                    of as a paradox by now. Ask me about the builds I have (or
                    have had in the past)!
                </div>
            </div>
        </div>
    );
};

export default About;
