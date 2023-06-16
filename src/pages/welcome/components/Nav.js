import React from "react";
import style from "../../../assets/css/welcome.css";

export default function Nav(){
	return (

		<div className="bg-main border-b-2 border-secondary lg:px-20 md:px-10 px-5 fixed top-0 left-0 right-0 z-50">
			<div className=" h-[4rem]  flex items-center">
				<div className="brand-name relative">
					<h3 className="text-fourth font-light impact text-2xl">Portfolio</h3>
				</div>
			</div>
		</div>
	)
}
