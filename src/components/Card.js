import {Link} from "react-router-dom";
import { faArrowUpRightFromSquare,faCheck,faQuoteLeft,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({name,link,img,feature,category,setCategory}){

	return(
			<div className=" card rounded-lg shadow-xl my-4 md:my-none">
				<div className="image">
					<img src={img} alt="" />
				</div>

				<div className="content px-4  py-4">
					<h3 className="text-center text-2xl font-semibold mb-2">{ name.toUpperCase() }</h3>
					
					<div className="flex justify-center gap-2">
						{category.map((c,i) => {
							return(
								<button className="bg-blue-600 rounded-sm px-4 text-white hover:bg-blue-800" key={i} onClick={e => setCategory(c)}>{c}</button>
							)
						})}
					</div>
					<div className="mt-4">
						<ul>
							{feature.map((f,i) => {
								return( 
									<li key={i}><FontAwesomeIcon icon={faCheck} className="me-4 text-green-500"  />{f}</li>
								)
							})}
						</ul>
					</div>
					
					<div className="flex justify-end">
						<button type="button">
							<a href={link} target="_blank">
								<h4 className="text-blue-400">Go to Github</h4>
							</a>
						</button>
					</div>	
				</div>

				
			</div>
	)
}