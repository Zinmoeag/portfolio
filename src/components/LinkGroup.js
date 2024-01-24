import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useSelector} from 'react-redux'


export default function LinkGroup(){

	const {myData} = useSelector(state => state)

	return(
		<>
			<div className="flex items-center justify-center w-fit gap-4">
				<a href={myData.links.facebook} target="blank">
				   <button className="hover:text-yellow-400  rounded-full">
			        		<FontAwesomeIcon icon={faFacebook} className="text-xl" />
			      </button>
			    </a>

			      <a href={myData.links.github} target="blank">
			      	<button className="hover:text-yellow-400 rounded-full">
				       <FontAwesomeIcon icon={faGithub} className="text-xl" />
				      </button>
			      </a>
			      
			      <a href={myData.links.linkedIn} target="blank">
				      <button className=" hover:text-yellow-400 rounded-full">
				       	  <div className="font-bold text-2xl">in</div>
				      </button>
			      </a>
			</div>
			

		   </>
	)
}

