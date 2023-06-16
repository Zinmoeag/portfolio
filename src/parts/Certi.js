import Card from "../components/Card.js"
import wdf from "../assets/image/certi/wdf.jpg";
import laravel from "../assets/image/certi/laravel.JPG";
import MyData from "../providers/MyData.js";
import {useMydata} from "../providers/MyData.js";

export default function Certi(){
	return(
		<MyData>
			<CertificateContainer />
		</MyData>
		
	)
}

function CertificateContainer(){

	const info = useMydata();

	return(
		<section className="md:mx-4">
			 	<h4 className="text-xl mt-4 text-slate-600">The Certificates I got</h4>

			 	<div className="card-container lg:mx-4 my-4 grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-none lg:gap-8 md:gap-4">
			 		{info.certificates.map( certi => {
				 		return(
				 			<Card key={certi.id} name={certi.name} img={certi.img ? require(`../assets/image/certi/${certi.img}`) : " "} link={certi.link} themeColor={"dark"} />
						)
				 	})}
			 		
			 		
			 	</div>
			</section>
	)
}