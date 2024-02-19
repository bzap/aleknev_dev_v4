import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";

const Header = () => {
    return (
        <div className="flex w-full justify-between text-xs text-white pt-4 font-black tracking-tighter">
            <div className="font-black tracking-tighter">logo</div>
            <div className="flex flex-row gap-5">
                <div>About</div>
                <div>Projects</div>
                <div>More</div>
            </div>
            <div>Contact</div>
        </div>
    );
};

export default Header;
