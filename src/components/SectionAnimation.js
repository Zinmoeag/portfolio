import React,{useRef, useEffect, useState} from "react";
import animation from "../assets/css/intersectionAnimation.css";

export default function SectionAnimation({children,option = "left"}){
	const [isVisible, setIsVisible] = useState(false);
	const [direction, setDirection] = useState(option);
	const targetRef = useRef(null);

	useEffect(() => {
		const Observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if(entry.isIntersecting){
					setIsVisible(true);
				}else{
					setIsVisible(false)
				}
			})
		});


		Observer.observe(targetRef.current);

		return () => {
			Observer.disconnect();
		}

	},[]);


	return(
		<section ref={targetRef} className={`overflow-hidden ${isVisible ? `${direction}Animate` : ""}`} >
			{children}
		</section>
	)


}