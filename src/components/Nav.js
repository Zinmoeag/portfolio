import { faMagnifyingGlass,faHouse,faBars  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import Searcher from "../components/Searcher.js";

export default function Nav({setIsMenuOn}){


	return (

		<nav className="bg-slate-800">
			<div className="lg:mx-20 md:mx-10 mx-4  flex itens-center justify-between relative">
				<div className="name uppercase text-white font-bold text-xl md:flex items-center hidden">
					PortFolio
				</div>

				<Searcher />

				<div className="icon-box flex gap-4 items-center text-white">
					<Link to="/">
						<button type="button" className="hover:text-slate-400">
							<FontAwesomeIcon icon={faHouse} />
						</button>
					</Link>


					<button type="button" className="md:hidden" onClick={e => setIsMenuOn(true)}>
						<FontAwesomeIcon icon={faBars} />
					</button>
					
				</div>

			</div>
		</nav>
		
	)
}