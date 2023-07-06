export default function Form(){
	return(
		<div>
			<h3 className="text-xl text-skin-fourth font-bold text-center">Please Let me know</h3>
			
				<form action="">
					<div className="flex items-center justify-center mt-8 h-[3rem]">
						<input type="text" className="w-[40rem] h-[3rem] bg-skin-fourth" />
						<button className="bg-skin-secondary w-[7rem] h-[100%] hover:bg-skin-secondary/50">Submit</button>
					</div>
				</form>
		</div>
	)
}