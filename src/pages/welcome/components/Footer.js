import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../../assets/css/footer.css";
import LinkGroup from "../../../components/LinkGroup.js";

export default function Footer() {
	return(
		<section className="text-slate-50 lg:h-[28rem] md:h-[30rem] relative footer">
			<div className="bg-skin-third/80  h-[100%] lg:px-20 md:px-10  px-4 py-10">

				<div className="flex flex-col md:flex-row gap-12 md:mt-32 mt-20 justify-between items-center">
					<div className="lg:w-[35rem] md:w-[30rem] w-[20rem] text-center">
						What sets me apart as a web developer is my commitment to delivering personalized solutions that meet the unique needs of each client. I take the time to understand the specific requirements of each project and work closely with clients to ensure that their vision is realized. I believe that every web application should be as unique as the client it serves, and I strive to deliver custom solutions that exceed expectations.
					</div>
					<div className="me-14">
						<h3 className="impact text-2xl text-skin-secondary pb-2">Contact Me</h3>
						<ul>
							<li>
								<div className="flex items-center gap-4 mb-4">
									<FontAwesomeIcon icon={faEnvelope} />
									<p className="">astro9857@gmail.com</p>
								</div>
							</li>
							<li>
								<LinkGroup />
							</li>
						</ul>
					</div>
			</div>

			<div>
				<div className="custom-shape-divider-top-1687944460">
				    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
				    </svg>
				</div>
			</div>
			</div>
			
			
		</section>
	)
}