import {useState,useContext} from "react";
import {useProjectData} from "../providers/ProjectData.js";


export default function DropDown(){
	const [isOn, setIsOn] = useState(false);
	const {category,setCategory} = useProjectData();
	const categoryList = [
		"frontend","backend","api"
	];

	const dropdownToggle = () => {
		setIsOn(!isOn);
	}

	const handleCategory =(e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOn(false);
		setCategory(e.target.value);


	}

	return(

		<>
		<div className=" me-4 relative"> 
					<button type="button" className="bg-slate-800 px-3 py-2 text-white w-32" onClick={dropdownToggle}>{category}</button>
					<ul className={`absolute right-0 top-12 bg-slate-800 w-60 opacity-80 backdrop-blur-sm ${!isOn ? "hidden" :  ""}`}>
						<li className="border-b-2 border-slate-700">
							<button type="button" className="w-[100%] text-start hover:bg-slate-700 py-2 ps-2 text-white" onClick={handleCategory} value="all">all</button>
						</li>
					
						{categoryList.map((item, i) => {
							return(
								<li className="border-b-2 border-slate-700" key={i} >
									<button type="button" className="w-[100%] text-start hover:bg-slate-700 py-2 ps-2 text-white" onClick={handleCategory} value={item}>{item}</button>
								</li>
							)
						})}
						
					</ul>
				</div>
			

		</>

		

		

	)
}




							

							
						