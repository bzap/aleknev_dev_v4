import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";

const Header = () => {
    return (
        <div className="flex w-full justify-between pt-4 body-text">
            <div className="">LOGO</div>

            {/* <div className="absolute right-[18em] -top-5 "> */}
            <div className="flex flex-row gap-8">
                <div>INSTAGRAM</div>
                <div>LINKEDIN</div>
                <div>GITHUB</div>
            </div>
            <div>CONTACT</div>

            {/* </div> */}
        </div>
    );
};

export default Header;
