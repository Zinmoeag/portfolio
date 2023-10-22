import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"	
import React, {useCallback} from "react";
import {useTheme} from "../utilites/ThemeProvider"

const ParticlesComponent = () => {

	const {theme} = useTheme();
	const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    const bgColor = theme === "light" ? "#dfe9f0" : "#161616";
    const subColor = theme === "light" ? "#f05645" : "#7d4b04";

	return (
		<>
			<section className="bg-skin-secondary overflow-hidden" >
				<Particles
		            id="tsparticles"
		            init={particlesInit}
		            loaded={particlesLoaded}
		            style ={{height: 200}}
		            options={{
		                background: {
		                    color: {
		                        value: bgColor,
		                    },
		                },
		                position : 'absolute',
		                fpsLimit: 120,
		                interactivity: {
		                    events: {
		                        onClick: {
		                            enable: true,
		                            mode: "push",
		                        },
		                        onHover: {
		                            enable: true,
		                            mode: "repulse",
		                        },
		                        resize: true,
		                    },
		                    modes: {
		                        push: {
		                            quantity: 4,
		                        },
		                        repulse: {
		                            distance: 200,
		                            duration: 0.4,
		                        },
		                    },
		                },
		                particles: {
		                    color: {
		                        value: subColor,
		                    },
		                    links: {
		                        color: subColor,
		                        distance: 150,
		                        enable: true,
		                        opacity: 0.6,
		                        width: 0.8,
		                    },
		                    move: {
		                        direction: "none",
		                        enable: true,
		                        outModes: {
		                            default: "bounce",
		                        },
		                        random: false,
		                        speed: 4,
		                        straight: false,
		                    },
		                    number: {
		                        density: {
		                            enable: true,
		                            area: 800,
		                        },
		                        value: 70,
		                    },
		                    opacity: {
		                        value: 0.8,
		                    },
		                    shape: {
		                        type: "circle",
		                    },
		                    size: {
		                        value: { min: 1, max: 3 },
		                    },
		                },
		                canvas : {
		                	size : {height:'400px'}
		                },
		                detectRetina: true,
		            }}
		        />
			</section>
		</>
	)
}


export default ParticlesComponent;