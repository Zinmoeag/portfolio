import {useState} from "react";
import Nav from "../components/Nav.js";
import {Link,Route,Routes} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionAnimation from "../components/SectionAnimation.js";
import ProjectData from "../providers/ProjectData.js";
import MyData from "../providers/MyData.js";
import Project from "../parts/Project.js"; 
import Certi from "../parts/Certi.js"; 
import Menu from "../components/Menu.js";
import DropDown from "../components/DropDown.js";


export default function ProjectBoard(){

	const [isMenuOn, setIsMenuOn] = useState(false);
	const [part, setPart] = useState("project");


	return(
		<>

		<ProjectData>

			<Nav setIsMenuOn={setIsMenuOn} className=" relative z-50" />

			<MyData>
				<Menu  setPart={setPart} isMenuOn={isMenuOn} setIsMenuOn={setIsMenuOn} />
			</MyData>

			


			<section className="content grid grid-cols-10 lg:ms-[14rem] md:ms-[10rem]">
				<div className="lg:col-span-10 md:col-span-10 col-span-10">
					<div className="bg-slate-800 w-full px-6 py-8">
						<SectionAnimation option={"top"}>
							<div className="text-white md:w-[25rem] w-full z-10">
								<h3 className="text-[2.5rem] font-semibold my-2 text-cyan-200 m-0">
									Welcome
								</h3>
								<h4 className="text-xl text-slate-400  my-2">to My Porfolio</h4>
								<p className="text-md  text-slate-400 font-light my-2">You can Explore the passion for Web Development and the works that I Created</p> 
							</div>
						</SectionAnimation>
						
					</div>

					<section className="grid grid-cols-10">

						<section className="lg:col-span-8 col-span-10 ">
							{part === "project" && <Project /> }
							 {part === "certificate" && <Certi /> }
						</section>

						<div className="col-span-2 px-2 hidden lg:block">
							<SectionAnimation > 
								<div className="w-full bg-gradient-to-r from-cyan-500 to-lime-200 shadow-lg px-2 h-16 rounded-lg my-2 text-white text-xl font-bold flex items-center">Projects - 6</div>
							</SectionAnimation>
							
							<SectionAnimation>
								<div className="w-full bg-gradient-to-r from-red-500 to-amber-200 shadow-lg px-2 h-16 rounded-lg my-2 text-white text-xl font-bold flex items-center">Certificate - 4 </div>
							</SectionAnimation>

							<SectionAnimation>
								<div className="w-full bg-gradient-to-r from-indigo-500 to-teal-200 shadow-lg px-2 h-16 rounded-lg my-2">this is </div>
							</SectionAnimation>
						</div>
					</section>

				</div>
				
			</section>

			

		</ProjectData>


		</>
	)
}