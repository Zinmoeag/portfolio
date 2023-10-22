const ToolsContent = ({keyword}) =>{

	const item = [
		"React", "Redux", "laravel", "Html", "Css", "Php", "Typescript", "Tailwind", "Bootstrap"
	]
	return (
			<>
				<h3> > Here is My Daily Use Tools</h3>
				<div className="row flex gap-1 flex-wrap w-[35rem]">
						{item && item.map(item => (
						 	<div className="cell w-[6rem] overflow-hidden flex-none">
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
}


export default ToolsContent;