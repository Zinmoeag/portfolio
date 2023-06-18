import {useState} from "react";
import useRedirect from "../hooks/useRedirect.js";


export default function ProgressBtn({to,text}) {

	const [isClicked, setIsClicked] = useState(false);
	const [uri,setUri] = useState(null);


	useRedirect(uri);

	let AnimationCount = 0;

	const handleClick = () => {
		setIsClicked(true);
	}

	const handleRedirect = (e) => {

		if(AnimationCount > 0){
			setUri(to)
		}
		AnimationCount++;
	}

	return (
		<button 
			type="button" 
			className={`main-btn bg-secondary text-lg font-bold ${isClicked && "progress"}`}
			onClick ={handleClick}
			onAnimationEnd={handleRedirect}>
				{text}
		</button>
)
}