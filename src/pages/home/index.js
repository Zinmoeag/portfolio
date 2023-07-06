import Nav from "../../components/Nav.js";
import Searcher from "./components/Searcher.js";
import TagContainer from "../../components/TagContainer.js";
import BlogContainer from "../../components/BlogContainer.js";
import Footer from "./components/Footer.js";
import DropDown from "../../components/DropDown.js";
import Navigator from "./components/Navigator.js";

export default function Home(){
	return(
		<div className="bg-skin-main overflow-hidden">
			<Nav />
			<Searcher />
			<Navigator />
			
			<TagContainer />
			<section className="lg:mx-20 md:mx-10 mx-4">
				<div className="flex mb-4">
					{/*<DropDown />*/}
				</div>
				<BlogContainer />
			</section>
			<Footer />
		</div>
	)
}