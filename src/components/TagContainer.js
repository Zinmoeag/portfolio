import Tag from "./Tag.js";
import {useSelector} from 'react-redux'
import useCurrentUri from '../hooks/useCurrentUri.js'

export default function TagContainer(){
	const project = Object.values(useSelector(state => state.projects));
	const {setQueryParams} = useCurrentUri();
	const category = [];

	for(let i = 0; i < project.length; i++){
		let categoryArr = project[i].category;
		for(let j = 0; j < categoryArr.length; j++){

			if(!category.includes(categoryArr[j])){
				category.push(categoryArr[j])
			}

		}
	}


	return (
		<div className="flex lg:px-20 md:px-10 sm:px-8  md:justify-center md:flex-wrap px-4 py-4  gap-2 cursor-pointer w-full overflow-scroll noscrollbar">
			<Tag 
				tagFor="All" 
				onClick={() => setQueryParams({
					category : "all",
					page : 1,
				})}
			/>
			{category && category.map((category,i) => (

				<Tag 
					key={i}
					tagFor={category} 
					onClick={() => setQueryParams({
						category : category,
						page : 1,
					})}
				/>
			))}
		</div>
	)
}