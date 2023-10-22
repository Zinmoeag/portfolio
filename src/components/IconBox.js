import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BounceAnimatedBtn from './BounceAnimatedBtn.js';
import {useSelector} from 'react-redux'
import 'animate.css';

export default function IconBox(){

	const {myData} = useSelector(state => state)

	return (
		<>
			<div className="icon-box bg-skin-fourth flex lg:flex-col justify-between content-between lg:gap-[4rem] md:gap-[5rem] gap-[3rem] p-3 w-fit rounded-[20rem] h-fit z-40 text-skin-main">
				<BounceAnimatedBtn>
					<a href={myData.links.github} target="blank">
						<FontAwesomeIcon icon={faGithub} className="lg:text-[2.5rem] md:text-[3.5rem]  text-[2rem]" />
					</a>
				</BounceAnimatedBtn>

				<BounceAnimatedBtn>
					<a href={myData.links.facebook} target="blank">
						<FontAwesomeIcon icon={faFacebook} className="lg:text-[2.5rem] md:text-[3.5rem]  text-[2rem]" />
					</a>
				</BounceAnimatedBtn>

				<BounceAnimatedBtn>
					<a href={myData.links.linkedIn} target="blank">
						<div className="lg:text-[1.8rem] md:text-[2.5rem]  text-[1.rem] bg-skin-main text-skin-fourth flex items-center justify-center font-bold  rounded-full lg:w-[2.5rem] md:w-[3.5rem]  w-[2rem]  lg:h-[2.5rem] md:h-[3.5rem]  h-[2rem]">in</div>
					</a>
				</BounceAnimatedBtn>
			</div>
		</>
	)
}

