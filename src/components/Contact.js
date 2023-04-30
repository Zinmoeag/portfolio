import { faFacebook, faGithub , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare,faCheck,faQuoteLeft,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkGroup from './LinkGroup.js';
import MyData from "../providers/MyData.js";

export default function Contact(){
	return(
		<div className="bg-white border border-slate-200 shadow mx-6 rounded-xl px-6 py-8 text-slate-600 text-lg">
				<div className="border-b-2 border-slate-400 pb-4">
					<h4 className="text-2xl text-center font-bold uppercase" >Contact Me</h4>
				</div>

				<div className="my-6">
					<h4 className="">Email<span className="ms-2"><FontAwesomeIcon icon={faEnvelope} /></span></h4>
					<p className="text-green-600"><FontAwesomeIcon icon={faCheck}  className="text-xl text-green-600"/> astro9857@gmail.com</p>
				</div>

				<div className="my-6">
					<h4 className="">Location<span className="ms-2"><FontAwesomeIcon icon={faLocationDot} /></span></h4>
					<p className="text-green-600"><FontAwesomeIcon icon={faCheck}  className="text-xl text-green-600"/> Yangon, Myanmar</p>
				</div>

				<div className="my-6">
					<h4 className="mb-2">Links</h4>
					<div>
						<LinkGroup />
					</div>	
				</div>

			</div>
	)
}