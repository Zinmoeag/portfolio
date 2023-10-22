import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DropDown = ({name,data}) => {
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		setToggle(false)
	},[])


	return (
		<>
			<div className="relative">
				<button 
					className=" w-[8rem] text-md bg-white text-slate-900 border-[0.01rem] border-slate-600 outline-none py-1 flex justify-between px-4 hover:text-skin-secondary items-center"
					onClick = {() => {setToggle(prev => !prev)}}
				>
					{name}
					<FontAwesomeIcon
						className="" 
						icon={faAngleDown}
					/>
				</button>

				
				<ul className={`${toggle ? 'h-fit' : "h-[0rem]"} bg-white flex flex-col gap-2 text-slate-900 overflow-hidden transition-all duration-500 absolute w-full z-40`}>
					{data && data.map((item,i) => (

						<li  className="hover:bg-skin-secondary w-full px-2 " key={item.id}>
							{item.link && (
								<button
								key={i} 
								type="button"
								onClick={item.click}
								>{item.name}
								</button>
							)}


							{item.button && (
								<button
									key={i}
									onClick={item.button}
								>
								{item.name}
								</button>
							)}
						</li>

					))}
				</ul>

			</div>
		</>
	)
}


export default DropDown;