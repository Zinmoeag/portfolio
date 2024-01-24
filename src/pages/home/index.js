import Searcher from "./components/Searcher.js";
import TagContainer from "../../components/TagContainer.js";
import BlogContainer from "../../components/BlogContainer.js";
import Footer from "../../components/Footer.js";

export default function Home(){
	return(
		<div className="bg-skin-main overflow-hidden">
			<Searcher />
			<TagContainer />
			<section className="lg:mx-36 md:mx-10 mx-4 mb-40">
				<BlogContainer />
			</section>
			<Footer />
		</div>
	)
}