import {useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../assets/css/imagelazyLoad.css";

export default function ImageLazyLoad({src,alt = null}){
	const [isLoaded,setIsLoaded] = useState(false);

	const handleLazyload = () => {
		setIsLoaded(true)
	}

	return(
		<LazyLoadImage src={src}
		    alt={`${alt ? alt : "Image Alt" }`}
		    className={`relative z-10 object-cover h-full w-full opacity-0 ${isLoaded && "imglazyload"}`}
		    onLoad = {handleLazyload}
		/>
	)
}