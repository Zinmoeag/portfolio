import React from "react";
import abilityPhoto from "../../../assets/image/ability.png";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Ability(){

	return (
		<>
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
		</>
	)
	
}