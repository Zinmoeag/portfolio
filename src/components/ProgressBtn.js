import {useState,useEffect} from "react";
import useRedirect from "../hooks/useRedirect.js";
import {useTheme} from "../utilites/ThemeProvider.js";
import Loading from "./Loading.js";



export default function ProgressBtn({to,text}) {

	const {theme} = useTheme();
	const [isClicked, setIsClicked] = useState(false);
	const [isFinish, setIsFinish] = useState(false);
	const [uri,setUri] = useState(null);
	const [status, setStatus] = useState("Loading");

	useRedirect(uri);

	let AnimationCount = 0;

	const handleClick = () => {
		setIsClicked(true);
	}

	useEffect(() => {
		if(isFinish){
			setStatus("Redirecting");
		}
		return () => {
			setStatus("loading");
		}
	},[isFinish])

	const handleRedirect = (e) => {

		if(AnimationCount > 0){
			setIsFinish(true)
			setUri(to)
		}
		AnimationCount++;
	}

	const display = {
		display:`${!isClicked ? "none" : "flex"}`,
	}

	return (

		<div  className="flex flex-col items-center justify-center">

			<div className="h-[3rem]">

				<div  className="items-center justify-center h-[3rem]" style={display}>
					<p className="text-skin-fourth text-skin-light">{status}</p>
					<Loading />
				</div>
				
			</div>
	
			
			<button 
			type="button" 
			className={`main-btn bg-skin-secondary text-lg font-bold ${isClicked && "progress"}`}
			onClick ={handleClick}
			onAnimationEnd={handleRedirect}>
				{text}
			</button>
		</div>
		
)
}