import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionAnimation from "../../../components/SectionAnimation.js";
import {useSelector} from 'react-redux'

const Tools = () => {

	const tools = useSelector(state => state.tools)

	return (
		<>
		<SectionAnimation option={'right'}>
			<section className='md:w-[36rem] w-full mx-auto py-14'>
	 
				<h3 className='uppercase font-bold text-xl text-center text-skin-fourth mb-6 w-full'>Language & Framework</h3>

				<div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
					{Object.entries(tools).map(([key,value]) => (			
						<div className='col-span-1 flex items-center justify-center'>	
							<div 
							className='w-[7.5rem] h-[7.5rem] bg-skin-firth shadow-md rounded-lg text-slate-500 flex flex-col items-center justify-center'>
								<FontAwesomeIcon 
								className='text-[3rem]'
								icon={value.icon} 
								/>
								<h3 className='uppercase text-md'>{value.name}</h3>
							</div>
						</div>
					))}
				</div>
			</section>
		</SectionAnimation>
		</>
	)
}

export default Tools;