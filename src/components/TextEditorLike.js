import React,{useRef, useEffect} from "react";

export default function TextEditorLike (){
	const textRef = useRef(null);

	
	useEffect(() => {
		if(textRef){
			// textRef.current.setAttribute("data-length",textRef.current.getBoundingClientRect().right - textRef.current.getBoundingClientRect().left);
		}
	},[])

	return(
		<div className="bg-skin-firth w-full px-6 sm:px-10 py-10 shadow-lg text-skin-fourth h-full">
			<p><span className="text-skin-sixth">1</span> &nbsp;<span className="text-violet-700">import</span> React <span className="text-violet-700">from</span> <span className="text-green-700">"react"</span>;</p>
			<p><span className="text-skin-sixth">2</span></p>
			<p><span className="text-skin-sixth">3</span> &nbsp;<span className="text-violet-700">export  default  function</span>  App ( ) {"{"}</p>
			<p><span className="text-skin-sixth">4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-700">return </span>(</p>
			<p><span className="text-skin-sixth">5</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<h3>"}<span className="typing-animation inline-block overflow-hidden leading-[0.9]" ref={textRef} >Hello World!</span>{"</h3>"}</p>
			<p><span className="text-skin-sixth">6</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</p>
			<p><span className="text-skin-sixth">7</span> &nbsp;&nbsp;&nbsp;{"}"}</p>
			<p><span className="text-skin-sixth">8</span>{" }"}</p>
		</div>
	)
}