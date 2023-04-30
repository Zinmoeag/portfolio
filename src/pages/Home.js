import React,{useRef, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import hero from "../assets/image/hero.jpg";
import LinkGroup from "../components/LinkGroup.js";
import LogoSlider from "../components/LogoSlider.js";
import skillPhoto from "../assets/image/skill.jpg";
import abilityPhoto from "../assets/image/ability.png";
import { faArrowUpRightFromSquare,faCheck,faQuoteLeft,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SectionAnimation from "../components/SectionAnimation.js";
import Contact from "../components/Contact.js";


export default function Home(){
	const heroStyling = {
		background : `url(${hero})`,
		backgroundPosition : "top right",
		backgroundSize:"cover"
	}


	return (
		<>
		<section className="hero md:h-[75vh] h-[60vh] relative flex items-center" style={heroStyling}>

				<SectionAnimation option="top">
					<div className="w-full md:w-[40rem] md:mx-20 px-4 flex flex-col justify-center items-center md:items-start">
		
						<h2 className="text-sky-600  md:text-4xl text-3xl font-bold mb-4">I'm Zin Moe Aung</h2>
						<h3 className="md:text-white  md:text-2xl text-xl font-bold mb-4 text-slate-600">Web developer</h3>
						<p className="md:text-white text-blue-300 font-light text-lg text-center md:text-start leading-8 ">
							Welcome to my portfolio website! I am excited to share with you my passion for Web Development and the work that I have created.
						</p>
						<Link to="/project">

							<button type="button" className="text-xl mt-2 border border-2 border-sky-400 hover:bg-sky-400 hover:text-white transition-all w-fit px-10 py-1 mt-4 text-sky-400">
								Explore
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
							</button>
						</Link>
						
						
						
				</div>
				</SectionAnimation>
			
				<div className="flex justify-center absolute bottom-[-1.3rem] left-[50%] translate-x-[-50%]">
					<LinkGroup />
				</div>
			
		</section>

		<SectionAnimation>
			<section className="skill md:mx-20 md:h-[90vh] flex items-center">
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
		</SectionAnimation>

		<SectionAnimation option={"right"}>
			<section className="ability md:mx-20 md:h-[80vh]">

				<div className="md:grid md:grid-cols-5 flex flex-col mt-10 md:px-4 md:mt-none md:p-none place-items-center">
					<div className="md:col-span-2">
						<img src={abilityPhoto} className="md:w-[28rem] w-[17rem] mx-auto" alt="" />
					</div>

					<div className="md:col-span-3 md:px-10 md:py-2 w-[10">
						<div className="md:p-8 m-3 p-4 rounded-lg shadow-xl border">
							<div className="flex items-center gap-5 py-2">
								<FontAwesomeIcon icon={faCheck}  className="text-xl text-green-600" />
								<p className="text-slate-700">
								My ability as a web developer stems not just from my technical expertise but also from my problem-solving skills and attention to detail. 
								</p>
							</div>

							<div className="flex items-center gap-5 py-2">
								<FontAwesomeIcon icon={faCheck}  className="text-xl text-green-600"/>
								<p className="text-slate-700">
									I have a keen eye for design and user experience and can deliver high-quality web applications that are not only visually appealing but also intuitive and user-friendly.
								</p>
							</div>
							

							<div className="flex items-center gap-5 py-2">
								<FontAwesomeIcon icon={faCheck} className="text-xl text-green-600" />
								<p className="text-slate-700">
									I also possess excellent communication skills and can work effectively with clients and team members to understand their requirements and deliver solutions that meet their needs.
								</p>
							</div>
						</div>
						
					</div>
				</div>
			</section>
		</SectionAnimation>


		<LogoSlider className="py-20" />




		<section className="md:grid md:grid-cols-5 md:mx-20 my-16">
			<div className="col-span-3 mx-8">
				<SectionAnimation option="top">
					<section className="my-20">
						<div className=" relative text-cyan-900 text-lg font-light w-full text-center border border-4 border-slate-800 md:p-14  py-14 p-4 rounded-br-[5rem]">
							<div className='bg-white w-fit px-6  py-4 absolute top-[-2.5rem] '>
								<FontAwesomeIcon icon={faQuoteLeft} className="text-[3rem]" />
							</div>
							
							<p>What sets me apart as a web developer is my commitment to delivering personalized solutions that meet the unique needs of each client. I take the time to understand the specific requirements of each project and work closely with clients to ensure that their vision is realized. I believe that every web application should be as unique as the client it serves, and I strive to deliver custom solutions that exceed expectations.</p>
						</div>
					</section>
				</SectionAnimation>
			</div>

			<div className="col-span-2"> 
				<SectionAnimation>
					<Contact />	
				</SectionAnimation>
			</div>
			
			
		</section>
		
		</>

	)
}













