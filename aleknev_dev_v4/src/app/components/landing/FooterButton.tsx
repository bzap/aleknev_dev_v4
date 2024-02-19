import { DownArrow, SideArrow } from "@/app/interface/icons";

type FooterButtonProps = {
    name: string;
};

const FooterButton = ({ name }: FooterButtonProps) => {
    return (
        <div className="flex flex-row items-center">
            <div className="font-semibold text-xs">{name}</div>
            <div className="-rotate-45 -ml-1">
                <SideArrow />
            </div>
        </div>
    );
};

export default FooterButton;
