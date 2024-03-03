// import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex w-full justify-between items-center pt-20 border-b-[1px] pb-4 border-b-stone-800">
            <div className="flex flex-row items-center justify-center">
                <div className="relative h-10 w-10 rounded-full mr-4 pt-0.5">
                    <Image
                        src={"/portrait.jpeg"}
                        alt={"/"}
                        // alt="profile"
                        width={500}
                        height={500}
                        layout="responsive"
                        className="rounded-full"
                        // objectFit="cover"

                        // fill
                    />
                </div>
                <div className="flex flex-col">
                    <div className="font-black text-stone-300 text-2xl antialiased -mb-1">
                        Linas Aleknevičius
                    </div>
                    <div className="font-medium text-sm text-stone-500">
                        Software Engineer
                    </div>
                </div>
            </div>

            <div className="flex flex-row text-white gap-3">
                <div className=" justify-center items-center">
                    <GithubLogo fill="#78716c" size={24} />
                </div>
                <div className="justify-center items-center">
                    <LinkedinLogo fill="#78716c" size={24} />
                </div>
                <div className="justify-center items-center">
                    <InstagramLogo fill="#78716c" size={24} />
                </div>
            </div>

            {/* </div> */}
        </div>
    );
};

export default Header;
