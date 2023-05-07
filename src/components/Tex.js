import {useContext,useState} from "react";
import { faMagnifyingGlass,faHouse,faBars  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ProjectData from "../providers/ProjectData.js";
import {useProjectData} from "../providers/ProjectData.js";

export default function Tex(){
	
	return(
		<ProjectData>
			<BbB />
		</ProjectData>
	)

}


function BbB(){

	const {data,query,setQuery, handleSearch} = useProjectData();


	console.log(data,query);

	return(
	"teh"
	)
}