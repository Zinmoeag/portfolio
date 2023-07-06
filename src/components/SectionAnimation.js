import React,{useRef, useEffect, useState} from "react";
import animation from "../assets/css/intersectionAnimation.css";
import WithIntersection from "../utilites/WithIntersection.js"

function AnimationComponent ({children,option = "left", isVisible}){

	const [direction, setDirection] = useState(option);

	return(
		<section  className={`overflow-hidden ${isVisible ? `${direction}Animate` : ""}`} >
			{children}
		</section>
	)
}

const SectionAnimation = WithIntersection(AnimationComponent);

export default SectionAnimation;
