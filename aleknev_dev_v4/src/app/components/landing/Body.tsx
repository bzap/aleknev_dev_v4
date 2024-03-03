import GlowContainer from "../GlowContainer";
import { aboutMe } from "@/app/resources/aboutMe";
import { AirplaneTakeoff } from "@phosphor-icons/react/dist/ssr/AirplaneTakeoff";

const Body = () => {
    return (
        <div className="flex flex-col w-full z-30">
            <div className="flex flex-col gap-4 text-sm text-zinc-500">
                <div className="inline-block">
                    Just a hardworking writer of code based in
                    <span className="text-zinc-300"> Toronto</span>. Currently
                    working for
                    <div className="flex flex-row">
                        <AirplaneTakeoff
                            size={16}
                            fill="#d4d4d8"
                            className="mr-1"
                        />
                        <span className="text-zinc-300">
                            AviaPro Consulting
                        </span>
                        !
                    </div>
                    <br />
                    Some of my fondest memories as a kid were messing around on
                    the good ol&apos; family PC we had and trying to theme
                    <span className="text-zinc-300"> Windows</span>. That
                    quickly spiraled into installing some
                    <span className="text-zinc-300"> Linux</span> distributions
                    on it unbeknownst to my parents, and from there feasting my
                    eyes on the <span className="text-zinc-300">terminal </span>
                    for the first time. I had no idea it would lead to so much
                    more in my life at the time.
                    <br />
                    <br />
                    While I try to
                    <span className="text-zinc-300 px-1">
                        constantly challenge myself
                    </span>
                    and keep up with any advancements in this field, I also
                    happen to have a soft spot for
                    <span className="text-zinc-300"> front-end</span> designs
                    and implementations. There&apos;s just something satisfying
                    about bridging the gap between what the developer sees and
                    what the user experiences. A well thought out, lively
                    interface makes the interaction feel
                    <span className="text-zinc-300">humanized</span> and less of
                    a machined process. I strive to achieve that.
                    <br />
                    <br />
                    When I&apos;m not working on something I might be
                    <span className="text-zinc-300"> bouldering </span>
                    or furthering my quest for the
                    <span className="text-zinc-300">endgame keyboard</span>. The
                    latter of which I&apos;ve come to think of as a paradox by
                    now. Ask me about the builds I have (or have had in the
                    past)!
                </div>
            </div>
        </div>
    );
};

export default Body;
