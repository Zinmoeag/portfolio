import {useState} from "react";
import {Link} from "react-router-dom";
import { faArrowUpRightFromSquare,faCheck,faQuoteLeft,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CategoryBtns = ({category,setCategory}) => {
	return(
		<div className="flex justify-center gap-2">
			{category.map((c,i) => {
				return(
					<button className="bg-blue-600 rounded-sm px-4 text-white hover:bg-blue-800" key={i} onClick={e => setCategory(c)}>{c}</button>
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

export default function Card({name,link,img,feature,category,setCategory}){

	return(
			<div className="card rounded-lg my-4 md:my-none relative h-[27rem]">
				<div className="image h-[12rem] w-full overflow-hidden object-cover px-4 absolute top-0 z-10">
					<img src={img} className="object-cover w-full h-full rounded-lg shadow-lg" alt="" />
				</div>

				<div className="content pt-20 bg-skin-firth h-[19rem] overflow-hidden shadow-md rounded-xl relative top-[8rem]">
					
					<div className="bg-skin-secondary py-1 mb-2">
						<h3 className="text-center text-xl font-semibold text-skin-main">{ name.toUpperCase() }</h3>
					</div>

					<div className="px-4 text-skin-fourth">
						{category && <CategoryBtns category={category} setCategory={setCategory} />}
						
						{/*{feature && <FeatureList feature={feature} />}*/}

						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cupiditate molestiae soluta repudiandae quam inventore deleniti. Ipsam laborum perferendis laboriosam, illum! Ea autem, velit minima vero illum, dolor quisquam hic! </p>
					</div>
					
					<div className="flex justify-end bg-gradient-to-b from-skin-transparent to-skin-firth to-30% pt-[0.5rem] px-4 h-[3rem] w-[100%] text-skin-secondary font-bold absolute bottom-0">
						<button type="button">
							<a href={link} target="_blank">
								<h4 className="">More</h4>
							</a>
						</button>
					</div>	

				</div>

				
			</div>
	)
}