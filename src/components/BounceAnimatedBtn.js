import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';

export default function BounceAnimationBtn({children}){

	const [isEnter, setIsEnter] = useState(false);

	const handleEnter = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsEnter(true);
	}
	const handleLeave = (e) => {

		e.stopPropagation();
		e.preventDefault();
		setIsEnter(false);
	}
	return(
		<div 
			onMouseEnter={handleEnter} 
			onMouseLeave={handleLeave}
			>
			<div className={`${isEnter && "animate__bounceIn"} cursor-pointer`}>
				{children}
			</div>
		</div>
)
}