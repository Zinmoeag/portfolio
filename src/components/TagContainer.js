import Tag from "./Tag.js";

export default function TagContainer(){

	return (
		<div className="flex lg:px-20 md:px-10 sm:px-8  md:justify-center md:flex-wrap px-4 py-4  gap-2 cursor-pointer w-full overflow-scroll noscrollbar">
			<Tag tagFor={"FrontEnd"} />
			<Tag tagFor={"BackEnd"} />
			<Tag tagFor={"AnmbottoJkum"} />
			<Tag tagFor={"FullStack"} />
		</div>
	)
}