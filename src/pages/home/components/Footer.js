import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../../assets/css/footer.css";
import LinkGroup from "../../../components/LinkGroup.js";

export default function Footer () {
	return (
		<div className="bg-skin-third footer lg:h-[20rem] md:h-[30rem] h-[40rem] relative mt-8">
			<div className="bg-skin-cover/80 h-full"></div>
			<div className="content">
				<div className="absolute top-0 w-full text-slate-50 h-full lg:px-20 md:px-10 px-5 flex items-center ">
					<div className="flex md:flex-row flex-col md:items-center justify-between w-full gap-10">

						<div className="flex lg:flex-row flex-col lg:items-center justify-between lg:w-[30rem] ">
							<div className="navigator">
								<h3 className="text-xl uppercase font-bold">Navigator</h3>
								<div className="mt-2">
									<ul className="border-skin-secondary border-s-2 border-dashed ps-4">
										<li className="hover:ps-2 ease-in duration-200 cursor-pointer w-fit">Blogs</li>
										<li className="hover:ps-2 ease-in duration-200 cursor-pointer w-fit">Projects</li>
									</ul>
								</div>
							</div>

							<div className="contact md:mt-4">
								<h3 className="text-2xl text-slate-50 pb-2 font-bold uppercase">Contact Me</h3>
								<ul>
									<li>
										<div className="flex items-center gap-4 mb-2">
											<FontAwesomeIcon icon={faEnvelope} />
											<p className="text-skin-secondary">astro9857@gmail.com</p>
										</div>
									</li>
									<li>
										<p className="pb-2">Certificate</p>
									</li>
									<li>
										<LinkGroup />
									</li>
								</ul>
							</div>
						</div>

						<div className="lg:w-[30rem] md:w-[40rem] w-[20rem] md:text-center md:ms-4">
							What sets me apart as a web developer is my commitment to delivering personalized solutions that meet the unique needs of each client. I take the time to understand the specific requirements of each project and work closely with clients to ensure that their vision is realized. I believe that every web application should be as unique as the client it serves, and I strive to deliver custom solutions that exceed expectations.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}