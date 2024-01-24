import ProgressBtn from "../../../components/ProgressBtn";
import codeImg from "../../../assets/image/project/code.png";
import timeImg from "../../../assets/image/project/time.png";
import webImg from "../../../assets/image/project/web.png";
import '../../../assets/css/pjicon.css'

const Projects = () => {
	return (
		<>
			<div className="md:px-20 py-14 relative bg-skin-firth">
				<div className="flex flex-col lg:w-[50rem] w-full px-4 py-4 rounded-lg items-center mx-auto relative z-20 ">
					<h3 className="text-2xl uppercase text-blue-400 mb-4 font-bold text-[3rem] py-4">Projects</h3>
					<p className="text-center text-skin-fourth text-xl">
					Feel free to roam, click, and explore. Each project is a chapter waiting to be read. Thank you for being here. I am excited to share with you my passion for Web Development and the work that I have created..
					</p>
					<ProgressBtn 
					to={'/home'}
					text={'Projects'}
					/>
				</div>


				<div className="absolute left-0 right-0 top-0 bottom-0 Z-10">
					<div className="relative w-full h-full">
						<img
						className="md:w-[15%] w-[20%] absolute left-[10%] icon"
						src={codeImg}
						alt="ddd"
						/>
						<img
						className="w-[10%] absolute right-[10%] top-[10%] icon"
						src={timeImg}
						alt="ddd"
						/>
						<img
						className="md:w-[6%] w-[15%] absolute left-[15%] bottom-[10%] icon rotate-1 blur-sm"
						src={timeImg}
						alt="ddd"
						/>
						<img
						className="md:w-[7%] w-[15%] absolute right-[50%] bottom-[50%] icon rotate-1 blur-sm"
						src={timeImg}
						alt="ddd"
						/>
						<img
						className="lg:w-[15%] w-[20%] absolute right-[15%] lg:bottom-[10%] bottom-[5%] icon rotate-4"
						src={webImg}
						alt="ddd"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects;