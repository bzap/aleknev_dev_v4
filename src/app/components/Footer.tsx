import { socials, contact } from "../resources/footers";
import Divider from "./elements/Divider";
import SectionContainer from "./elements/SectionContainer";

const Footer = () => {
    return (
        <SectionContainer delay={600}>
            <Divider bottomMargin />
            <div className="flex flex-row justify-between">
                <div className="flex flex-row base:gap-2 md:gap-4">
                    {socials.map(({ name, link, icon }) => {
                        return (
                            <a key={name} href={link} target="_blank">
                                {icon}
                            </a>
                        );
                    })}
                </div>
                <a href={contact.link}>{contact.icon}</a>
            </div>
        </SectionContainer>
    );
};

export default Footer;
