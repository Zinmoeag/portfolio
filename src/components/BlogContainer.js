import {useContext,useState} from "react";
import Card from "../components/Card.js";
import {useProjectData} from "../providers/ProjectData.js";
import DropDown from "../components/DropDown.js";


function PaginateBtn ({paginateBtn,setPageNo}) {
	return(
		<div className="paginatedBtn mx-4">
			<div className="paginate-btn-group flex justify-end py-6">
		 	<div className="flex space-x-1">
		      {paginateBtn.map(btn => {
			      	return(
	      				 <button
	      				 key={btn}
	      				 className="bg-blue-800 px-4 py-2 text-white rounded-none" 
	      				 id={btn}
	      				 onClick = {e => setPageNo(Number(e.target.id))}
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

	const {data,query,setPageNo,category,setCategory} = useProjectData();

	const {paginatedPage,pages,allpages} = data;

	const paginateBtn = [];

	for(let i = 1; i <= pages ; i++){
		paginateBtn.push(i);
	}

	return(

		<>
		
		<div className="card-container grid grid-cols-1 md:grid-cols-2  md:mx-none lg:gap-12 md:gap-6 lg:px-6">
			{paginatedPage && paginatedPage.map((d,i) => {
				return(
					<Card key={d.id} name={d.name} link={d.github} feature={d.feature} category={d.category} setCategory={setCategory} img={d.img ? require(`../assets/image/project/${d.img}`) : "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg"} key={i} />
				)
			})}
		</div>

		{paginateBtn.length > 1 && <PaginateBtn paginateBtn={paginateBtn} setPageNo={setPageNo} />}

		</>
	)
	
}





