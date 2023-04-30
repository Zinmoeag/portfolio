import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav(){
	const sideBarToggle = ( ) => {
		console.log("siderbaar");
	} 

	return (

		<div className="relative">
			<button className="p-2 py-1 bg-slate-900 hover:bg-slate-800 absolute top-6 right-6" onClick={sideBarToggle} >
				<FontAwesomeIcon icon={faBars} className="text-white text-xl" />
			</button>


			<div className="absolute bg-slate-800 h-[100vh]">
				sidebar
			</div>
		</div>
		
	)
}