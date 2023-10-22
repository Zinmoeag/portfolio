import project from '../../../data/ProjectData.js'
import {useEffect, useState} from 'react'

const copiedClipBoard = (text) => {
	navigator.clipboard.writeText(text);
}

const ProjectContentTer = ({id = null}) => {

	const projectList = project.map(data => data.slug)
	const [autoComplete, setAutoComplete] = useState(null)


	if(id){

		const projectItem = project.filter(item => item.slug === id)
		const targetProject = projectItem[0];
		if(targetProject){
			copiedClipBoard(targetProject.github)
			return(
				<a
				target="blank"
				 href ={targetProject.github}
				 className="text-yellow-500">

				  > {targetProject.github}
				</a>
			)
		}

	}else{
		return (

			<div>
				<ul>
					<li>To get Github Link,type project name after Projects keyword</li>
					{projectList.map(name => (
						<li className="text-green-500">
							<p>
							> {name}
							</p>
						</li>
					))}
				</ul>
			</div>
		)
	}



}

export default ProjectContentTer;