export default function Tag({tagFor, onClick}){
	return(
		<div 
			className="bg-skin-secondary text-sm px-4 md:text-md rounded-full shadow-lg text-skin-main"
			onClick={onClick}
		>
			{tagFor}
		</div>
	)
}