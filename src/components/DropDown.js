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
		<div className="me-4 relative"> 
					<button type="button" className="bg-skin-transparent text-skin-fourth  uppercase text-xl  w-[10rem] border-b-2 border-skin-secondary" onClick={dropdownToggle}>{category}</button>
					<ul className={`absolute left-0 top-12 bg-skin-main/70 w-60 shadow-xl  text-skin-fourth backdrop-blur-sm ${!isOn ? "hidden" :  ""} z-30`}>
						<li className="border-b-2 border-skin-secondary">
							<button type="button" className="w-[100%] text-start hover:bg-skin-third/20 py-2 ps-2" onClick={handleCategory} value="all">all</button>
						</li>
					
						{categoryList.map((item, i) => {
							return(
								<li className="border-b-2 border-skin-secondary" key={i} >
									<button type="button" className="w-[100%] text-start hover:bg-skin-third/20 py-2 ps-2" onClick={handleCategory} value={item}>{item}</button>
								</li>
							)
						})}
						
					</ul>
				</div>
			

		</>

		

		

	)
}




							

							
						