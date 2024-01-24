import React from "react";
import  TextEditorLike from "../../../components/TextEditorLike.js";
import  "../../../assets/css/textAnimation.css";
import Tools from './Tools.js';
import SectionAnimation from "../../../components/SectionAnimation.js";


export default function Skill(){

	
	return(
		<> 
		<section className="skill flex flex-col lg:flex-row items-center mt-20 px-20 justify-center md:py-0 relative z-10">


			<div className="lg:w-[50rem] sm:w-[43rem] w-[22rem] h-full">
				<TextEditorLike />
				<SectionAnimation>
					<div className="pb-4 bg-blue-500 px-4 py-2 rounded-lg my-4">
						<h3 className="text-yellow-500 text-xl uppercase">Ability?</h3>
						<p className="text-white text-sm">"I have the unique capability to transform caffeine into code or the art of programming."</p>
					</div>
				</SectionAnimation>
			</div>
			

			<div className="sm:px-20 sm:w-[45rem] w-[20rem] pt-8 relative">
				<div className="w-full relative">
					<Tools />
				</div>
			</div>
				
		</section>
		</>
	)
}