import React from "react";

import skillPhoto from "../../../assets/image/skill.jpg";


export default function Skill(){
	
	return(
		<>
		<section className="skill md:px-20 md:h-[90vh] flex items-center bg-main">

				<div className="grid md:grid-cols-2 mt-10 px-4 md:mt-none md:p-none place-items-center gap-4">

					<div className="content">
						<p className="text-lg text-slate-600">
						As a web developer, I possess a wide range of technical skills including proficiency in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, PHP, and Laravel. These skills enable me to build modern and dynamic web applications that meet the needs of my clients. Whether it's developing responsive and visually appealing user interfaces, integrating complex backend functionalities, or optimizing web applications for search engine visibility, I'm well-versed in the latest web development technologies and best practices.
						</p>
					</div>

					<div>
						<img src={skillPhoto} className="w-[16rem] md:w-[35rem] hidden md:block" alt="" />
					</div>

				</div>

			</section>
		</>
	)
}