
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useMydata} from "../providers/MyData.js";


export default function Menu({setPart,setIsMenuOn,isMenuOn}){
	
	const info = useMydata();

	const ImgUrl = require(`../assets/image/pic/${info.img}`);


	return(
		<div className={`col-span-2 fixed top-0 md:top-[3.5rem] h-full lg:w-[14rem] md:w-[10rem] bg-slate-200 w-full ${!isMenuOn && "translate-x-full"} md:block md:translate-x-0 duration-700 transition-all z-50`}>


			<div className="w-full flex flex-col items-center my-5 relative">

				<button 
					type="button" 
					className="text-xl bg-white px-3 py-1 border border-lg border-slate-400 absolute right-4 md:hidden"
					onClick={e => setIsMenuOn(false)}
					>
					<FontAwesomeIcon icon={faXmark} />
				</button>

				

				<div className="lg:w-32 lg:h-32 md:h-24 md:w-24 w-[10rem] h-[10rem] bg-slate-800 rounded-full mt-10 md:mt-0 overflow-hidden">

					<img src={ImgUrl} alt="" />
				
				</div>
				<div className="mt-4">
					<h3 className="text-slate-600 text-lg font-bold ">{info.name}</h3>
				</div>
			</div>

			<div className="links">
					<h3 className="border-b-2 border-slate-400 mx-4 mb-4 font-bold uppercase text-slate-600">Explore</h3>

					<ul className="border-dashed border-s-2 border-slate-400 mx-8 px-4">
						<li><button type="button" id="project"  className="py- 1 hover:ps-4  transition-all duration-500 text-slate-700 "  onClick={e => {setPart(e.target.id);setIsMenuOn(false)}}>Project</button></li>
						<li><button type="button" id="certificate" className="py-1 hover:ps-4 transition-all duration-500  text-slate-700" onClick={e => {setPart(e.target.id);setIsMenuOn(false)}}>Certificate</button></li>
					</ul>		
			</div>
		</div>
	)
}