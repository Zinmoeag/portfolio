import Card from "../components/Card.js";
import DropDown from "../components/DropDown.js";
import useCurrentUri from '../hooks/useCurrentUri.js'
import useScroll from '../hooks/useScrollTop.js'
import "../assets/css/card.css";
import {useProjectData} from '../providers/ProjectData.js'
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

	const {search,page,category,setQueryParams} = useCurrentUri();
	const {
		data,
		setFilter,
		totalProjects,
	} = useProjectData();

	useScroll([search,page,category],300)
	const {paginatedPage,pages} = data;

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
		<div className="md:mx-none">

			<div className="text-skin-sixth border-b-[0.1rem] border-slate-600 mb-4 uppercase flex justify-between">

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

		{paginatedPage && (
			<>
			<h3 className="text-slate-400">
				Showing {paginatedPage.length} of {totalProjects}
			</h3>
			</>
		)}
		<div className="card-container flex flex-wrap items-center justify-center gap-12 py-10" id="cardSectionId">

			{paginatedPage && paginatedPage.map((d,i) => {
				return(
					<Link to={`/projects/${d.slug}`} key={d.id}>
						<Card 
						key={d.id}
						icon={d.icon} 
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

		<div className="">
			{paginateBtn.length > 1 && <PaginateBtn paginateBtn={paginateBtn} setQueryParams={setQueryParams} />}
		</div>


		</>
	)
	
}





