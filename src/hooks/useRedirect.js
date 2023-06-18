import {useEffect} from "react";

export default function useRedirect(uri){
	useEffect(() => {
		if(uri){
			window.location.href = uri
		}
	},[uri])
}