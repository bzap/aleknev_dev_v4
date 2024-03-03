// import { paragraph, paragraphTwo, paragraphThree } from "@/info/background";

import Image from "next/image";

const Header = () => {
    return (
        <div className="flex w-full justify-between items-center pt-12 border-b-[1px] pb-3 border-b-stone-800">
            <div className="flex flex-row items-center justify-center">
                <div className="relative h-10 w-10 rounded-full mr-4 pt-0.5 base:hidden md:block">
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

            {/* </div> */}
        </div>
    );
};

export default Header;
