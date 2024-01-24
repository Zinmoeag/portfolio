import { faEnvelope, faPhone, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/css/footer.css";
import LinkGroup from "./LinkGroup.js";

export default function Footer () {
	return (
		<div className="sm:h-[10rem] h-[18rem] relative text-slate-500 flex items-center bg-skin-firth flex items-center">
		
			<div className="content">
				<div className="absolute top-0 w-full px-5 flex items-center ">
					<div className="flex md:flex-row flex-col md:items-center justify-between w-full gap-10">

						
							<div className='flex flex-col sm:flex-row justify-between w-full py-6 sm:px-6 border-blue-300 border-t-[0.3rem] lg:mx-20 gap-12'>
								<div className='uppercase flex gap-4'>
									<FontAwesomeIcon icon={faCode} className="text-[3rem] mb-2 text-yellow-500" />
									<div>
										<h3 className='text-xl font-bold'>Zin Moe Aung</h3>
	 									<p className='text-slate-500'>Developer</p>
									</div>
								</div>

								<div className='sm:w-fit w-full'>
									<div className='bg-slate-500 rounded-lg px-2 py-2 text-white text-sm w-full flex flex-col gap-2'>
										<div className="flex items-center gap-4">
											<FontAwesomeIcon icon={faEnvelope} />
											<p>astro9857@gmail.com</p>
										</div>
										<div className="flex items-center gap-4">
											<FontAwesomeIcon icon={faPhone} />
											<p>+959 772 314 165</p>
										</div>
									</div>

									<div className='flex gap-2 items-center'>
										<h3 className='text-sm'>Follow Me - </h3>
										<LinkGroup />
									</div>
								</div>
							</div>


					</div>
				</div>
			</div>
		</div>
	)
}