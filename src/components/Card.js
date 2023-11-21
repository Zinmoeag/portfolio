import {useState} from "react";
import {Link} from "react-router-dom";
import { faArrowUpRightFromSquare,faCheck,faQuoteLeft,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCurrentUri from '../hooks/useCurrentUri.js'


const CategoryBtns = ({category}) => {
	const {setQueryParams} = useCurrentUri();

	const handleCategoryQuery = (e,c) => {
		e.stopPropagation();
		e.preventDefault();
		setQueryParams({category: c})
	}

	return(
		<div className="flex justify-center gap-2">
			{category.map((c,i) => {
				return(
					<button 
					className="bg-slate-700 rounded-sm px-4 text-white hover:bg-blue-800" 
					key={i} 
					onClick={e => handleCategoryQuery(e,c)}
					>{c}</button>
				)
			})}
		</div>
	)
}

const FeatureList = ({feature}) => {
	return(
		<div className="mt-4 text-skin-fourth">
			<ul>
				{feature.map((f,i) => {
					return( 
						<li key={i}><FontAwesomeIcon icon={faCheck} className="me-4 text-green-500"  />{f}</li>
					)
				})}
			</ul>
		</div>
	)
}

export default function Card({name,link,img,feature,category}){

	return(
			<div className="card rounded-lg md:my-none relative h-fit">
				<div className="image h-[15rem] w-full overflow-hidden object-cover z-10 my-4">
					<img 
					src={img} 
					className="object-cover w-full h-full shadow-lg"
					alt=""
					/>
				</div>

				<div className="content bg-white/10 backdrop-blur-sm h-fit overflow-hidden shadow-md absolute bottom-0 w-full">
					
					<div className="px-4 py-1 text-skin-fourth text-sm">
						{category && <CategoryBtns category={category} />}
					</div>

					<div className="bg-skin-firth  border-skin-secondary border-t-[0.3rem] py-2">
						<h3 className="text-center text-lg font-semibold text-skin-fourth">{ name.toUpperCase() }</h3>
					</div>

				</div>

				
			</div>
	)
}