import {connect} from 'react-redux'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import PageTransition from '../../components/PageTransition.js'
import useScroll from '../../hooks/useScrollTop.js'
import {useAppStateContext} from '../../utilites/AppStateContext.js'
import Footer from "../../components/Footer.js";

const links = [
	{name:"Blogs", slug:"/blogs?page=1"},
	{name:"Projects", slug:"/projects?page=1"},
]

const Show = () => {

	const {slug} = useParams()
	const projects = useSelector(state => state.projects);
	const data = projects[slug];
	const {showImageDisplay, setShowImageDisplay} = useAppStateContext();

	const handleDisplayImage = (e) => {
		setShowImageDisplay(e.target.src)
	}

	useScroll([],0)

	if(data){

		return (
			<PageTransition>
				<div className="bg-skin-main">
					<div className="w-full bg-skin-secondary h-[18rem] overflow-hidden mt-[4rem] relative">
						<div className="black-cover bg-skin-cover h-full w-full  absolute top-0 left-0 z-20 opacity-80"></div>
						<img 
						className="w-full h-full object-cover"
						src={data.img ? require(`../../assets/image/project/${data.img}`) : "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0"} />
					</div>


					<div className="grid grid-cols-11 bg-skin-transparent relative  z-30 relative  xl:w-full mx-auto md:px-10">

						<h3 className="impact text-[2rem] md:text-[3rem] px-4 md:px-8 text-white py-4  absolute top-[-8rem] w-full">
							{data.name}
						</h3>
						<section className="col-span-11 xl:col-span-7">

							<div className="w-showContainer mx-auto rounded-lg relative">

								<div className="flex gap-2 pt-6 overflow-scroll noscrollbar mx-4">
									{data.category.map(((category,i) => {

										return(
											<Link to={`/home?category=${category}`} key={i} >
												<div className="px-4 bg-skin-secondary w-fit rounded-full text-skin-main hover:bg-skin-secondary/80 whitespace-nowrap">
													<h3>{category}</h3>
												</div>
											</Link>
										)
									}))}
								</div>


								<div>
									<div className="text-skin-fourth text-md p-5 pb-14">

										<div className="overflow-hidden">
											<p className='bg-green-600 px-4 py-1 text-skin-main'>Github Link</p>
											<div className="py-2 text-slate-600 flex items-center gap-2 w-full">
												<FontAwesomeIcon icon={faLink} />
												<a href={data.github} target="_blank">{data.github}</a>
											</div>
										</div>

										<div id="description" className="py-2 text-justify">
											<h3 className="font-bold text-2xl pb-2">Description</h3>
											{data.description && data.description}
										</div>

										<div id="features" className="py-2 text-justify">
											<h3 className="font-bold text-2xl pb-2">Features</h3>
										 	{data.feature.map(feat => (
										 		<div className="py-4" key={feat.id}>
										 			<h2 className='text-xl font-bold mb-4'>
										 				{feat.name}
										 			</h2>
										 			<div className="flex justify-center items-center mb-2">
										 				{feat.img && (
												 			<img 
												 			onClick={handleDisplayImage}
												 			className='cursor-pointer w-[80%]'
												 			src={feat.img ? require(`../../assets/image/project/${feat.img}`) : "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0"} alt="" />
										 				)}
										 			</div>
										 			<p>{feat.description}</p>
										 		</div>
										 	))}
											
										</div>
									</div>
								</div>

							</div>
						</section>
					</div>
				</div>
				<Footer 	/>
			</PageTransition>
		)
	}

}
export default Show


