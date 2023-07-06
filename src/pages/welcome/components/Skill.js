import React from "react";
import  TextEditorLike from "../../../components/TextEditorLike.js";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "../../../assets/css/textAnimation.css";


export default function Skill(){
	
	return(
		<> 
		<section className="skill flex flex-col lg:flex-row items-center my-8 justify-center sm:px-20 py-14 gap-8">


			<div className="lg:w-[50rem] sm:w-[43rem] w-[22rem]">
				<TextEditorLike />
			</div>
			

			<div className="sm:px-20 sm:w-[45rem] w-[20rem] lg:mt-0 mt-10 pt-8 relative">
				
				<div className="w-fit relative">
					<h3 className="text-center text-xl text-skin-sixth font-bold">As a web developer, I possess a wide range of technical skills including proficiency in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, PHP, and Laravel.</h3>
					<div className='w-fit px-6  py-4 absolute top-[-3rem] left-[-2rem] text-skin-sixth'>
						<FontAwesomeIcon icon={faQuoteLeft} className="text-[2rem]" />
					</div>
				</div>
			</div>
				
		</section>
		</>
	)
}