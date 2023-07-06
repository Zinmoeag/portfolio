import {useTheme} from "../../../utilites/ThemeProvider.js";
import React, {useState,useEffect, createRef} from "react";
import {Link} from "react-router-dom";
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  IconBox from "../../../components/IconBox.js";
import  ProgressBtn from "../../../components/ProgressBtn.js";
import SectionAnimation from "../../../components/SectionAnimation.js";
import  "../../../assets/css/progressbar.css";
import  "../../../assets/css/herotext.css";
import HeroText from "./Herotext.js";


export default function Hero(){

	const {theme} = useTheme();

	return (
		<>
		<section className="bg-skin-main h-fit relative">

			<div className="back absolute w-[100vw] h-[100vh] z-10 hidden lg:block">
				<div className="grid grid-cols-11">
					<div className="lg:col-span-9 "></div>
					<div className="lg:col-span-2 img lg:h-[100vh] lg:block">
						<div className={`black-cover bg-skin-cover h-[100%] opacity-70`}></div>
					</div>
				</div>
			</div>
		
			<div className="content lg:h-[100vh] flex flex-col justify-between relative z-30">

				<SectionAnimation>
					<div className="grid grid-cols-11 h-[100vh] lg:h-[70vh] pt-20 text-[20px] md:text-[35px] lg:text-[50px]">

						<div 
							className="col-span-11 mx-4 text-skin-secondary flex items-center justify-center
										lg:col-span-9"
						>
							<HeroText />

						</div>
						
						<div className="lg:col-span-2 col-span-11 lg:h-full h-[30vh]  flex md:flex-col gap-4 items-center justify-center relative">
						
							<div className="w-full h-full flex items-center justify-center img-md relative"> 
								<IconBox />
								<div className="black-cover bg-skin-main h-[100%] w-full opacity-70 absolute top-0 left-0 lg:hidden"></div>
							</div>
						</div>
					</div>
				</SectionAnimation>
				

				<div className="button h-[30%] lg:flex items-center justify-center hidden text-skin-fourth">
					<ProgressBtn to={"/home"} text={"Explore"} />	
				</div>

			</div>

		</section>
		</>
	)
}