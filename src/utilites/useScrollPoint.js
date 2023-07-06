import {useState, useEffect} from 'react';

export default function useScrollPoint(){

	const [scroll , setScroll] = useState(0);

	useEffect(() => {

		const handleScroll = () => {
			setScroll(window.pageYOffset);
		}

		window.addEventListener("scroll",handleScroll);


		return () => window.removeEventListener("scroll",handleScroll);

	});

	return scroll;

}