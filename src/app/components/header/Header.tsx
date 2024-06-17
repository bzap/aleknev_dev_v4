import Image from "next/image";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import ToggleButton from "./ToggleButton";

const Header = () => {
    return (
        <div className="animate-slidein [--slidein-delay:0ms] opacity-0 flex h-full items-center border-b-zinc-200 dark:border-b-zinc-800 border-b-[1px] pb-3 flex w-full justify-between">
            <div className="flex flex-row items-center justify-center">
                <div className="relative h-14 w-14 rounded-full mr-4 active:scale-95 cursor-pointer">
                    <Image
                        src={"/memoji.webp"}
                        alt={"/"}
                        width={500}
                        height={500}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="font-black text-zinc-600 dark:text-zinc-200 text-2xl antialiased -mb-1.5">
                        Linas Aleknevičius
                    </div>
                    <div className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
                        Software Developer
                    </div>
                    <div className="flex flex-row gap-0.5 items-center">
                        <MapPin
                            size={11.5}
                            weight="fill"
                            className="fill-zinc-400 dark:fill-zinc-500"
                        />
                        <div className="font-medium text-xs text-zinc-400 dark:text-zinc-500">
                            Toronto
                        </div>
                    </div>
                </div>
            </div>
            <ToggleButton />
        </div>
    );
};

export default Header;
