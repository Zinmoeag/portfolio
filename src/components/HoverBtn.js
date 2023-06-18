import {useState, createRef} from "react";
import hoverBtn from "../assets/css/hoverBtn.css";

export default function HoverBtn ({	children}){


	const [isEnter,setIsEnter] = useState(false);
	const hoverRef = createRef(null);


	const hover = (e) => {

		setIsEnter(true);

		// console.log(e.target.offsetParent)
		const x = e.clientX - e.target.getBoundingClientRect().left;
		const y = e.clientY - e.target.getBoundingClientRect().top;

		hoverRef.current.style.top = y+"px";
		hoverRef.current.style.left = x+"px";
		
	}

	const leave = () => {
		setIsEnter(false)
	}

	return (
		<div 
			className= "bg-secondary px-10 py-2 text-xl font-bold relative overflow-hidden"
			onMouseMove={hover}
			onMouseLeave={leave}
			>
				<div 
				className={`hover absolute z-10 ${!isEnter && "hidden" }`}
				ref={hoverRef}
				>
				</div>
				<span className="z-30 text relative">
					{children}
				</span>
		
		</div>
	)
}