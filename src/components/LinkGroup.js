import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useSelector} from 'react-redux'


export default function LinkGroup(){

	const {myData} = useSelector(state => state)

	return(
		<>
			<div className="flex items-center justify-center w-fit">
				<a href={myData.links.facebook} target="blank">
				   <button className="w-[3.5rem] h-[3rem] bg-blue-500 hover:bg-blue-600 text-white ">
			        		<FontAwesomeIcon icon={faFacebook} className="text-xl" />
			      </button>
			    </a>

			      <a href={myData.links.github} target="blank">
			      	<button className="w-[3.5rem] h-[3rem] bg-slate-500 hover:bg-slate-600 text-white">
				       <FontAwesomeIcon icon={faGithub} className="text-xl" />
				      </button>
			      </a>
			      
			      <a href={myData.links.linkedIn} target="blank">
				      <button className="w-[3.5rem] h-[3rem] bg-blue-500 hover:bg-blue-600 text-white ">
				       	  <div className="font-bold text-2xl">in</div>
				      </button>
			      </a>
			</div>
			

		   </>
	)
}

