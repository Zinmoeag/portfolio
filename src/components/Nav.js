import { Link } from "react-router-dom";
import  "../assets/css/welcome.css";
import {useTheme} from "../utilites/ThemeProvider.js";
import  ThemeToggler from "../components/ThemeToggler.js";


export default function Nav(){

	const {theme,setTheme} = useTheme();

	const handleDownladFile = () => {
		const file = process.env.PUBLIC_URL + "/cv.pdf";
		window.open(file, '_blank');
	}
	
	return (

		<div className="bg-skin-firth border-b-2 border-skin-firth lg:px-20 md:px-10 px-5 fixed top-0 left-0 right-0 z-50 shadow-lg">
			<div className=" h-[4rem]  flex items-center justify-between">

				<div className="brand-name relative">
					<Link to="/">
						<h3 className="text-skin-fourth font-light impact text-2xl">Portfolio</h3>
					</Link>
				</div>
			
				<div className="flex flex-row gap-4 items-center justify-center">
					<button
					onClick={handleDownladFile}
					className="bg-skin-secondary py-2 px-4 rounded-full text-white"
					>
					Download CV
					</button>
					<ThemeToggler />
				</div>
			</div>
		</div>

	)
}
