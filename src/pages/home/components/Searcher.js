import useScrollPoint from "../../../utilites/useScrollPoint";
import searcher from "../../../assets/image/background/searcher.jpg";
import "../../../assets/css/searcher.css";
import SearchBox from "../../../components/SearchBox";
import ImageLazyLoad from "../../../components/ImageLazyLoad";
import "../../../assets/css/stickyScroller.css";


export default function Searcher(){

	const scrollpoint = useScrollPoint();

	return (
		<div className="mt-[4rem]">
			<div className="searcher h-[23rem] overflow-hidden relative">

				<ImageLazyLoad src={searcher} />

				<div className="bg-skin-cover/60 h-full w-full absolute top-0 left-0 z-20"></div>
				<div className="content absolute h-full w-full top-0 left-0 z-30 text-skin-sixth flex flex-col items-center justify-center">
					<h3 className="impact text-2xl text-center mb-8"><span className="text-skin-secondary">Search</span> Anything You Want!</h3>
					<div className={`w-full flex items-center justify-center ${scrollpoint > 218 && "fixed-bar bg-skin-main/50 backdrop-blur-md"}`}>
						<SearchBox />
					</div>
				</div>
			</div>
		</div>
 
	)

}