import ToolsContent from './ToolsContent.js'
import ProjectContentTer from './ProjectContentTer.js'

const TerminalContent = ({data}) => {
	if(data?.type === "array" && data?.displayType === "box"){

		return (
			<>
				<h3> > Here is My Daily Use Tools</h3>

		
				<div className="row flex gap-1 flex-wrap w-[30rem]">
						{data.data.map((item,i) => (
						 	<div 
						 	className="cell max-w-[6rem] overflow-hidden flex-none"
						 	key={i}
						 	>
							 	<p>---------------</p>
							 	<p className="flex justify-between">
							 		<span>|</span>
							 		<span className="">{item}</span>
							 		<span>|</span>
							 	</p>
							 	<p>---------------</p>
						 	</div>
						))}
			 	</div>

			</>
		)
	}else if(data?.type === "array" && data?.displayType === "list" ){
		return (
			<div>
				<ul>
					<li>{data.message}</li>
					{data.data.map((name,i) => (
						<li 
						className="text-green-500"
						key={i}
						>
							<p>
							> {name}
							</p>
						</li>
					))}
				</ul>
			</div>
		)
	}else if(data?.type === "string"){
		return(
			<div>
				<p>{data.message}</p>
				<a
				target="blank"
				 href ={data.data}
				 className="text-yellow-500">

				  > {data.data}
				</a>
			</div>
		)
	}
}

export default TerminalContent;