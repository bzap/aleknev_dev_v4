import Image from "next/image";

const Header = () => {
    return (
        <div className="flex w-full items-center border-b-zinc-800 border-b-[1px] pb-3">
            <div className="flex flex-row items-center justify-center">
                <div className="relative h-10 w-10 rounded-full mr-4">
                    <Image
                        src={"/memoji.webp"}
                        alt={"/"}
                        width={500}
                        height={500}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="font-black text-zinc-200 text-2xl antialiased -mb-1">
                        Linas Aleknevičius
                    </div>
                    <div className="font-medium text-sm text-zinc-400">
                        Software Engineer
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
