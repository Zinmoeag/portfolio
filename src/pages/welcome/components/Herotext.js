import  ProgressBtn from "../../../components/ProgressBtn.js";

export default function Herotext(){
	return(
		<div className="w-[17em] mt-10 lg:mt-0">

			<div className="">
				<div className="flex items-end justify-between gap-[0.15em]">
					<div className="">
						<h3 className="impact textstroke text-[1.4em] leading-[0.9]">WELCOME TO</h3>
					</div>
					<div className="">
						<h3 className="impact text-skin-sixth text-[1.05em] leading-[0.9]">my portfolio website</h3>
					</div>
				</div>
			</div>

			<div className="impact text-skin-fourth m-0 p-0">
				<div className="flex items-center justify-between">
					<div className="">
						<div className="text-skin-fourth text-[0.9em]  h-fit p-0 leading-[0.9]">MY</div>
						<div className="text-skin-secondary  h-fit p-0 leading-[0.9] text-[0.4em]">name</div>
						<div className="text-skin-fourth  h-fit p-0 leading-[0.9] text-[1.3em]">
							<div className=" w-fit rotate-90">IS</div>
						</div>
					</div>
					<div>
						<div className="text-[2.8em] leading-none">ZIN MOE <span className="text-skin-secondary">AUNG</span></div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center text-skin-fourth text-[1rem] text-skin-fifth mt-4 lg:mt-0">
				<p>I am excited to share with you my passion for Web Development and the work that I have created.</p>
			</div>
			<div className="button h-[30%] lg:flex items-center justify-center lg:hidden text-[0.8em] mt-8 md:mt-20 text-skin-sixth">
				<ProgressBtn to={"/home"} text={"Explore"} />	
			</div>
		</div>
	)
}