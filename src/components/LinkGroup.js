import {useContext} from "react";
import { faFacebook, faGithub , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {infoContext} from "../providers/MyData.js";
import MyData from "../providers/MyData.js";

function LinkgroupUi(){
	return(
		<infoContext.Consumer>
			{info => {
				return(
				<>
					<a href={info.links.facebook} target="_blank">
					   <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white ">
				        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
				      </button>
				    </a>

				      <a href={info.links.github} target="_blank">
				      	<button className="px-6 py-3 bg-slate-500 hover:bg-slate-600 text-white">
					       <FontAwesomeIcon icon={faGithub} className="text-2xl" />
					      </button>
				      </a>
				      
				      <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white ">
				        <FontAwesomeIcon icon={faInstagram}  className="text-2xl" />
				      </button>

				   </>
				)
			}}

	     </infoContext.Consumer> 
	)
}



export default function LinkGroup(){
	return(
		<MyData>
			<LinkgroupUi />
		</MyData>
	)
}

