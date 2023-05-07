import {useContext,useState} from "react";
import { faMagnifyingGlass,faHouse,faBars  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useProjectData} from "../providers/ProjectData.js";

function SearcherUi(){

	const [search,setSearch] = useState("");
	const {data,setQuery, handleSearch} = useProjectData();

	const Search =(e) => {
			e.preventDefault();
			handleSearch(search);
	}


	// console.log(data);
	return(
		<div className="searchbar my-2 w-[35rem] md:relative">
			<form className="flex  items-center" onSubmit={Search}>
				<input type="text" 
				name="search" 
				className ="bg-slate-700 w-full h-10 px-2 text-white"
				placeholder="Search Project here"
				value = {search}
				onChange={e => setSearch(e.target.value)}
				/>

				<button className="px-4 text-white hover:text-slate-400" type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</form>
		</div>
	)
}


export default function Searcher(){
	return(
			<SearcherUi />
	)
}