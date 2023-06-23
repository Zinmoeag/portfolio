import {useState, useEffect} from "react";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTheme} from "../utilites/ThemeProvider.js";
import  "../assets/css/toggler.css";

export default function ThemeToggler() {

	const {theme,setTheme} = useTheme();
	const [hoveredTheme,setHoveredTheme] = useState("");

	useEffect(() => {
		setHoveredTheme(theme);
	},[theme])

	//hover 
	const handleMove = (e) => {
		setHoveredTheme(e.currentTarget.id)
	}

	const handleLeave = () => {
		setHoveredTheme(theme)
	} 

	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setTheme(e.currentTarget.id);
	}

	const ball = {
		transform : `${hoveredTheme === "dark" ? "translateX(1.7rem)" : "translateX(0)" }`
	}

	return(
		<div className="bg-skin-fourth w-[3.4rem] h-[1.7rem] flex items-center justify-between rounded-[6rem] relative text-[0.9rem] cursor-pointer">
			<div 
				className={`block item w-[1.7rem] h-[1.7rem]  flex items-center justify-center relative z-40 ${hoveredTheme === "light" && "active"}`}
				onMouseEnter = {handleMove}
				onMouseLeave = {handleLeave}
				onClick = {handleClick}
				id="light"
				data-testid="light"
			>
				<FontAwesomeIcon icon={faSun} />
			</div>

			<div 
				className={`block item w-[1.7rem] h-[1.7rem]  flex items-center justify-center relative z-40 ${hoveredTheme === "dark" && "active"}`}
				onMouseEnter = {handleMove}
				onMouseLeave = {handleLeave}
				onClick = {handleClick}
				id="dark"
				data-testid="dark"
			>
				<FontAwesomeIcon icon={faMoon} />
			</div>
			<div className="ball absolute bg-skin-main w-[1.4rem] h-[1.4rem] m-[0.15rem] top-0 rounded-full z-10" data-testid="ball" style={ball}></div>
		</div>
	)
}