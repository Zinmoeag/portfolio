import {useTheme} from "../../../utilites/ThemeProvider.js";
import React, {useState,useEffect, createRef} from "react";
import {Link} from "react-router-dom";
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  HoverBtn from "../../../components/HoverBtn.js";
import  IconBox from "../../../components/IconBox.js";
import  ProgressBtn from "../../../components/ProgressBtn.js";
import SectionAnimation from "../../../components/SectionAnimation.js";
import  "../../../assets/css/progressbar.css";


export default function Hero(){

	const {theme} = useTheme();

	// const test = "bg-dark-secondary"

	console.log(theme)

	return (
		<>
		<section className="bg-skin-main h-[100vh] relative">

			<div className="back absolute w-[100vw] h-[100%] z-10 hidden lg:block">
				<div className="grid grid-cols-11">
					<div className="lg:col-span-9 "></div>
					<div className="lg:col-span-2 img lg:h-[100vh] lg:block">
						<div className={`black-cover bg-skin-main h-[100%] opacity-70`}></div>
					</div>
				</div>
			</div>
		
			<div className="content h-[100vh] flex flex-col justify-between relative z-30">

				<SectionAnimation>
					<div className="grid grid-cols-11 h-[100vh] lg:h-[70vh] pt-20">
					
						<div className={`lg:col-span-9 col-span-11 flex flex-col lg:gap-[0.8rem] gap-[1rem]  lg:items-center items-start justify-center lg:h-full h-[60vh]  lg:h-full text-skin-fourth xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.4rem] text-[1rem] font-light px-6 sm:px-10 md:px-20`}>		
								<h3 className="text-fourth impact xl:text-[2.5rem] lg:text-[2.2rem] md:text-[2.2rem] text-[1.5rem]">
									<span className="text-skin-secondary xl:text-[4.5rem] lg:text-[4rem] md:text-[6rem]  text-[3.3rem] relative me-4 lg:inline block">Welcome To 
										<div className="absolute lg:bottom-[-0.8rem] lg:left-[-2.5rem] md:right-[-1.8rem] md:bottom-[0.3rem] right-[-2rem] bottom-[-0.5rem]">
											<div className={`pointer flex items-center justify-center md:text-3xl text-sm  text-skin-fourth`}>
												<FontAwesomeIcon icon={faArrowPointer} />
											</div>
										</div>
									</span>
									<span className="upline relative lg:inline block">My Portfolio Website!</span>
								</h3>
						
							<p>My name is Zin Moe Aung, I am excited to share with you <span className="md:hidden">my passion  for Web Development and the work that I have created.</span></p>
							<p className="text-skin-secondary hidden md:block">my passion  for Web Development and the work that I have created.</p>

							<div className="lg:hidden text-skin-main self-center mt-4">
								<ProgressBtn to={"/project"} text={"Explore"} />
							</div>

						</div>

						<div className="lg:col-span-2 col-span-11 lg:h-full h-[30vh] flex md:flex-col gap-4 items-center justify-center relative">
						
							<div className="w-full h-[100%] flex items-center justify-center img-md relative"> 
								<IconBox />
								<div className="black-cover bg-skin-main h-[100%] w-full opacity-70 absolute top-0 left-0 lg:hidden"></div>
							</div>
						</div>
					</div>
				</SectionAnimation>
				

				<div className="button h-[30%] lg:flex items-center justify-center hidden ">

					<ProgressBtn to={"/project"} text={"Explore"} />	
					
				</div>
			</div>

		</section>
		</>
	)
}