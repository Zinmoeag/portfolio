import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRef, useEffect} from 'react'
import TerminalContent from './TerminalContent.js'
import {useState} from 'react'
import {useSelector} from 'react-redux'


const Terminal = () => {

	const projects = useSelector(state => state.projects)
	const tools = Object.values(useSelector(state => state.tools))
	const state = {projects,tools}

	const [step, setStep] = useState(state);
	const TerminalRef = useRef(null);
	const [data, setData] = useState(null);
	const page = '';
	const error = null;

	const [terminal, setTerminal] = useState("")

	const terminalHandler = (argument) => {

		const args = argument.filter(arg => arg.length > 1) 

		if(args[0] === "projects"){

			//check item is exsit in state
			if(args[1] && state['projects'][args[1]]){
				setData({
					message : "Click this Link",
					data: state['projects'][args[1]].github,
					type : "string",
					displayType: null,
				})
			}else{
				//check item is exsit in state
				if(state[args]){
					setStep(state["projects"])
					setData({
						message: "To get Github Link type those name after projects keyword",
						data:Object.keys(state[args]),
						type:"array",
						displayType: "list",
					})
				}
			}
		}
		//check item is exsit in state
		else if(args[0] === "tools" && state[args]){
			setData({
				message: "Daily Usage Tools",
				data:state[args],
				type:"array",
				displayType:"box"
			})
		}
	}


	useEffect(() => {
		if(TerminalRef.current){
			 TerminalRef.current.addEventListener('keydown', (e) => {

				const keyList = step && Object.keys(step);
				if(e.code === "Tab" && keyList){
					e.preventDefault();
				 	const value = TerminalRef.current.value.split(" ")
				 	const lastIndex = value.length - 1
				 	const searchValue = value[lastIndex]

				 	if(searchValue.length > 1){
						const possibleKey = keyList.filter(i => i.includes(searchValue))

						if(possibleKey[0]){
							const text = e.target.value.replace(searchValue, possibleKey[0])
							setTerminal(text); 
						}
				 	}
				}
			})
		}

		if(terminal.length === 0){
			setStep(state)
			setData(null)
		}
	},[terminal, step])


	const handleSubmit = (e) => {
		e.preventDefault();
		terminalHandler(terminal.split(" "))
	}

	return (
		<div className="bg-skin-firth/70 py-20 lg:flex hidden items-center relative z-10 px-10">
			<div className="bg-black w-[55%] rounded-lg overflow-auto ">
				<div id="header" className="bg-slate-700" >
					<div id="dot" className="flex gap-2 ms-4 py-2">
						<div className="bg-red-600 h-4 w-4 rounded-full"></div>
						<div className="bg-yellow-400 h-4 w-4 rounded-full"></div>
						<div className="bg-green-600 h-4 w-4 rounded-full"></div>
					</div>
				</div>
				<div id="body" className="text-white bg-black mx-4 h-[26rem] text-md">
					<h3 className="">
						<span className="text-green-600 uppercase">Zinmoeag </span>
						<span className="text-violet-600 uppercase">Myportfolio Terminal </span>
						<span className="text-yellow-400">~/{page} </span>
					 </h3>

					 <p>
					 type those keywords in that terminal <span className="text-yellow-400">"tools", "projects"</span>
					 </p> 

					 <form onSubmit={handleSubmit}>
						 <div className="flex">
						 	<p className="text-yellow-400">
							 	$
						 	</p>
						 	<input
						 		ref={TerminalRef}
						 		value={terminal}
						 		type="text"
						 		onChange={(e) => {
						 			setTerminal(e.target.value);
						 		}}
						 		className="bg-skin-transparent w-full outline-none ms-4"
						 		
						 	/>
						 </div>

						 <button
						 	className="hidden"
						 	type="submit"
						 >Submit</button>

					 </form>



					 <div id="content">
					 	<TerminalContent
					 		data={data}
					 	/>
					 </div>

				</div>
			</div>

			<div className="flex justify-center flex-1 flex-col mb-8">
				<h3 className="text-center text-2xl font-bold uppercase">Portfolio's Terminal</h3>
				<ul className="px-16 text-slate-500 pt-4">
					<li>
						<p>
							<FontAwesomeIcon 
							icon={faHandPointRight}
							className="pe-4" 
							/>
							AutoFill Feature support
						</p>
						<p>(press "tab" after typing at least two words)</p>
					</li>

					<li>
						<p>
							<FontAwesomeIcon 
							icon={faHandPointRight}
							className="pe-4" 
							/>
							"Tools" and "Project" can be searched from Terminal
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Terminal;