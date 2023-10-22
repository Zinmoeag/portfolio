import {useContext,useState, useEffect} from "react";
import Card from "../components/Card.js";
import DropDown from "../components/DropDown.js";
import useCurrentUri from '../hooks/useCurrentUri.js'
import useScroll from '../hooks/useScrollTop.js'
import "../assets/css/card.css";
import {useProjectData} from '../providers/ProjectData.js'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'



function PaginateBtn ({paginateBtn,setPageNo, setQueryParams}) {
	return(
		<div className="paginatedBtn mx-4">
			<div className="paginate-btn-group flex justify-end py-6">
		 	<div className="flex space-x-1">
		      {paginateBtn.map((btn) => {
			      	return(
	      				 <button
	      				 key={btn}
	      				 className="hover:bg-skin-secondary bg-slate-800 px-4 py-2 text-white rounded-full" 
	      				 id={btn}
	      				 onClick = {e => setQueryParams({page: Number(e.target.id)})}
	      				 >
	      				   {btn}
	      				 </button>
			      	)
		      })}

			</div>

		 </div>
		</div>
	)
}

export default function BlogContainer(){

	const projects = useSelector(state => state.projects);

	const {search,page,category,setQueryParams} = useCurrentUri();
	const {data,setFilter} = useProjectData();

	useScroll([search,page,category],300)
	const {paginatedPage,pages,allpages} = data;

	const paginateBtn = [];

	for(let i = 1; i <= pages ; i++){
		paginateBtn.push(i);
	}

	const handleSort = (sort) => {
		setFilter(prev => ({
			...prev,
			sort : sort,
		}))
	}

	return(

		<>
		<div className=" md:mx-none">

			<div className="text-skin-sixth border-b-[0.1rem] border-slate-600  mb-4  uppercase flex justify-between">

				<h3 className="pb-4 impact text-xl " >
					{category && <span className="text-slate-500">{category}</span>}
					
					{search &&  <span className="text-skin-secondary"> /  {search} </span> }
				</h3>

				<DropDown
					name="sort"
					data = {[
						{id:1,name : "Latest", button : () => handleSort('desc')},
						{id:2,name : "Oldest", button : () => handleSort('asc')}
					]}
				/>
			</div>
		</div>

		<div className= "card-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-6" id="cardSectionId">

			{paginatedPage && paginatedPage.map((d,i) => {
				return(
					<Link to={`/projects/${d.slug}`}>
						<Card 
						key={d.id} 
						name={d.name} 
						link={d.github} 
						feature={d.feature} 
						category={d.category} 
						img={d.img ? require(`../assets/image/project/${d.img}`) : "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg"} 
						/>
					</Link>
				)
			})}
		</div>

		{paginateBtn.length > 1 && <PaginateBtn paginateBtn={paginateBtn} setQueryParams={setQueryParams} />}

		</>
	)
	
}





