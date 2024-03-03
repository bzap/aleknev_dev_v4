import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";
import GlowContainer from "../GlowContainer";

const Body = () => {
    return (
        <div className="flex flex-col w-full z-30 pt-8">
            <div className="flex flex-col gap-4">
                <div className="text-stone-400 text-sm">{paragraph}</div>
                <div className="text-stone-400 text-sm">{paragraphTwo}</div>
                <div className="text-stone-400 text-sm">{paragraphThree}</div>
            </div>
        </div>
    );
};

export default Body;
