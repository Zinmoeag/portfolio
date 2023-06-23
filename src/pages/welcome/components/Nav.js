import  "../../../assets/css/welcome.css";
import  "../../../assets/css/toggler.css";
import {useTheme} from "../../../utilites/ThemeProvider.js";
import  ThemeToggler from "../../../components/ThemeToggler.js";


export default function Nav(){

	const {theme,setTheme} = useTheme();
	
	return (

		<div className="bg-skin-main border-b-2 border-skin-secondary lg:px-20 md:px-10 px-5 fixed top-0 left-0 right-0 z-50">
			<div className=" h-[4rem]  flex items-center justify-between">
			
				<div className="brand-name relative">
					<h3 className="text-skin-fourth font-light impact text-2xl">Portfolio</h3>
				</div>
			
				<div>
					<ThemeToggler />
				</div>
				
			</div>
		</div>

	)
}
