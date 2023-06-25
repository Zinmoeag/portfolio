import React from "react";
import abilityPhoto from "../../../assets/image/ability.png";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTheme} from "../../../utilites/ThemeProvider.js";
import SectionAnimation from "../../../components/SectionAnimation.js";

export default function Ability(){

	const {theme} = useTheme();

	return (
		<>
			<section className="ability lg:px-20 relative bg-skin-firth lg:bg-skin-transparent">

				<div className="lg:grid lg:grid-cols-5 flex flex-col pt-8 md:p-none place-items-center relative z-40 w-fit h-fit">
					<div className="lg:col-span-2  lg:bg-skin-transparent bg-skin-fourth border-8 lg:border-none border-skin-main overflow-hidden rounded-full lg:rounded-none absolute lg:relative bottom-[-4rem] lg:bottom-0 sm:bottom-[-5rem] left-[50%] lg:left-0 translate-x-[-50%] lg:translate-x-0 z-40">
						<img src={abilityPhoto} className="w-[8rem] sm:w-[10rem] lg:w-[28rem] mx-auto" alt="" />
					</div>

					<div className="md:col-span-3 lg:px-10 px-4 
									py-8 relative z-10">
						<SectionAnimation option="right">
							<div className="md:p-8 m-3 p-4 py-10 md:py-[4rem] rounded-lg shadow-xl bg-skin-firth/90 border-2 border-skin-sixth lg:border-skin-transparent">
								<div className="flex items-center gap-5 py-2">
									<FontAwesomeIcon icon={faCheck}  className="text-xl text-skin-true" />
									<p className="text-skin-fourth">
									My ability as a web developer stems not just from my technical expertise but also from my problem-solving skills and attention to detail. 
									</p>
								</div>

								<div className="flex items-center gap-5 py-2">
									<FontAwesomeIcon icon={faCheck}  className="text-xl text-skin-true" />
									<p className="text-skin-fourth">
										I have a keen eye for design and user experience and can deliver high-quality web applications that are not only visually appealing but also intuitive and user-friendly.
									</p>
								</div>
								

								<div className="flex items-center gap-5 py-2">
									<FontAwesomeIcon icon={faCheck} className="text-xl text-skin-true" />
									<p className="text-skin-fourth">
										I also possess excellent communication skills and can work effectively with clients and team members to understand their requirements and deliver solutions that meet their needs.
									</p>
								</div>
							</div>
						</SectionAnimation>	
					</div>

					
				</div>

				<div className="bg-gradient-to-r from-skin-secondary to-skin-secondary/30 absolute top-[63%] left-0 w-[100%] h-[7rem] z-10" ></div>
			</section>
		</>
	)
	
}