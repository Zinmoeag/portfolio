import {useState} from "react";

export default function Navigator(){

	const [active, setActive] = useState("blogs");


	return(
		<div className="flex mb-4 gap-4 justify-center mt-4">
				<div className={`w-[10rem] border-b-2  hover:border-skin-secondary text-center text-2xl text-skin-fourth pb-1 cursor-pointer ${active === "blogs" ? "border-skin-secondary" : "border-skin-sixth" }`}>
					Blogs
				</div>

				<div className={`w-[10rem] border-b-2  hover:border-skin-secondary text-center text-2xl text-skin-fourth pb-1 cursor-pointer ${active === "projects" ? "border-skin-secondary" : "border-skin-sixth" }`}>
					Projects
				</div>
		</div>
	)
}