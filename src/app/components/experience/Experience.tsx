import React from "react";

import { experiences } from "@/app/resources/experiences";
import ExperienceCard from "./ExperienceCard";
import SectionContainer from "../elements/SectionContainer";

const Experience = () => {
    return (
        <SectionContainer delay={300} header="EXPERIENCE">
            <div className="flex justify-center w-full flex-col gap-4">
                {experiences.map(({ workplace, title, duration, link }) => (
                    <ExperienceCard
                        key={workplace}
                        workplace={workplace}
                        title={title}
                        duration={duration}
                        link={link}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default Experience;
