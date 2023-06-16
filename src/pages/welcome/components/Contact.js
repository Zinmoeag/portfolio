import React from "react";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contact from "../../../components/Contact.js";

import SectionAnimation from "../../../components/SectionAnimation.js";


export default function ContactSection(){
	
	return (
		<>
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