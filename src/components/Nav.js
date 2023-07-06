import { Link } from "react-router-dom";
import  "../assets/css/welcome.css";
import {useTheme} from "../utilites/ThemeProvider.js";
import  ThemeToggler from "../components/ThemeToggler.js";


export default function Nav(){

	const {theme,setTheme} = useTheme();
	
	return (

		<div className="bg-skin-firth border-b-2 border-skin-firth lg:px-20 md:px-10 px-5 fixed top-0 left-0 right-0 z-50 shadow-lg">
			<div className=" h-[4rem]  flex items-center justify-between">

				<div className="brand-name relative">
					<Link to="/">
						<h3 className="text-skin-fourth font-light impact text-2xl">Portfolio</h3>
					</Link>
				</div>
			
				<div>
					<ThemeToggler />
				</div>
			</div>
		</div>

	)
}
