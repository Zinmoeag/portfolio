import { faFacebook, faGithub , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTheme} from "../utilites/ThemeProvider.js";
import BounceAnimatedBtn from './BounceAnimatedBtn.js'
import 'animate.css';

export default function IconBox(){
	const {theme} = useTheme();

	return (
		<>
			<div className="icon-box bg-skin-fourth flex lg:flex-col lg:gap-[3rem] md:gap-[5rem] gap-[3rem] p-3 w-fit rounded-[20rem] h-fit z-40 text-skin-main">
				<BounceAnimatedBtn>
					<FontAwesomeIcon icon={faGithub} className="lg:text-[2.5rem] md:text-[3.5rem]  text-[2rem]" />
				</BounceAnimatedBtn>

				<BounceAnimatedBtn>
					<FontAwesomeIcon icon={faFacebook} className="lg:text-[2.5rem] md:text-[3.5rem]  text-[2rem]" />
				</BounceAnimatedBtn>

				<BounceAnimatedBtn>
					<FontAwesomeIcon icon={faInstagram} className="lg:text-[2.5rem] md:text-[3.5rem] text-[2rem]"  />
				</BounceAnimatedBtn>
			</div>
		</>
	)
}