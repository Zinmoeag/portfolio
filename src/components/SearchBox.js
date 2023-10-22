import {useState,useEffect,useRef} from "react";
import { faMagnifyingGlass,faHouse,faBars  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useCurrentUri from '../hooks/useCurrentUri.js'


export default function SearchBox(){

	const [search,setSearch] = useState("");
	const {currentUri, setQueryParams} = useCurrentUri();

	const Search =(e) => {
		e.preventDefault();
		setQueryParams({
			search : search,
			page : 1
		})
	}


	return(
			<div 
			className="searchbar my-2 md:w-[40rem] w-[21rem] sm:w-[30rem] transition-top duration-300"
			>
				<form className="flex  items-center" onSubmit={Search}>
					<input type="text" 
					name="search" 
					className ="bg-skin-fourth/80 w-full h-10 px-2 text-skin-main outline-none"
					placeholder="Search . . ."
					value = {search}
					onChange={e => setSearch(e.target.value)}
					autoComplete = "off"
					/>

					<button className="px-2 text-skin-secondary hover:text-slate-400" type="submit">
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</form>
		</div>
	)
}