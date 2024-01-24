import {useState} from "react";
import { faFilm, faCheck } from '@fortawesome/free-solid-svg-icons';
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

export default function Card({name,link,img,icon,feature,category}){

	const [isEnter, setIsEnter] = useState(false);

	return(
			<div
			className="card md:my-none relative w-[18rem] h-[12rem] rounded-lg overflow-hidden"
			onMouseEnter={e => setIsEnter(true)}
			onMouseLeave={e => setIsEnter(false)}
			>

				<div 
				className="absolute righ-0 left-0 top-0 bottom-0 z-10">
					<div className="fixed h-full w-full flex items-center justify-center bg-slate-600/30 backdrop-blur-sm text-yellow-400 uppercase font-lg">
						See Info
					</div>
					<img 
					src={img} 
					alt=""
					className="w-auto h-full object-cover" 
					/>
				</div>

				<div 
				className={`bg-gradient-to-r from-blue-300/70 via-rose-200 to-blue-300/70 w-full h-full z-20 absolute px-2 py-2 ${isEnter ? 'translate-x-full' : 'translate-x-0'} transition-all duration-200`}
				>
					<div className="flex items-center justify-center h-full">
						<FontAwesomeIcon 
						icon={icon}
						className='text-slate-500 text-[4rem] relative z-20 opacity-40'
						/>
					</div>
					<div className="absolute bottom-2 right-2 flex flex-col justify-end items-end text-white">
						<h3 className="uppercase text-xl text-blue-500">{name}</h3>

						<ul className="flex gap-2 text-sm text-red-500">
							{category.map((cate,i) => (
								<>	
									<li key={i}>
										{cate}
									</li>
								</>
							))}
						</ul>
					</div>

				</div>


			</div>
	)
}