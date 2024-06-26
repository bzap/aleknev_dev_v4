type ProjectsType = {
    name: string;
    desc: string;
    link: string;
}[];

export const projects: ProjectsType = [
    {
        name: "Mrkdwn",
        desc: "Minimalistic markdown editor website that conforms to GFM standards.",
        link: "https://mrkdwn.org/",
    },
    {
        name: "WPM Dog",
        desc: "Typing test website with multiple modes, and a focus on distraction-free operation. ",
        link: "https://wpm-dog.vercel.app/",
    },
    {
        name: "P0 JKernel",
        desc: "Jupyter Notebook kernel that enables compiling and running P0 language programs.",
        link: "https://p0-files-bzap.vercel.app/",
    },
    // {
    //     name: "ARD Util",
    //     desc: "Toolkit that samples Amazon review data and recommends by keyword frequency.",
    //     link: "https://github.com/bzap/ARD_Util",
    // },

    // {
    //     name: "Terrain Gen",
    //     desc: "Three dimensional terrain generator, complete with panning and rendering options.",
    //     link: "https://github.com/bzap/terrain_gen",
    // },
];
