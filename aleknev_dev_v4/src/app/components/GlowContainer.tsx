const GlowContainer = () => {
    return (
        <div
            id="grad-container"
            className="inset-0 pointer-events-none transition duration-300 fixed transition w-full"
            // style={{
            //     background: background,
            // }}
        >
            <div
                id="grad-container"
                className="inset-0 pointer-events-none transition duration-300 fixed transition w-full"
                // style={{
                //     background: background,
                // }}
            >
                <div className="gradient-bg ">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="blur"
                                />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                    result="goo"
                                />
                                <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.95"
                                    numOctaves="3"
                                    stitchTiles="stitch"
                                />

                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                    <div className="gradients-container opacity-30">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                        <div className="interactive"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlowContainer;
