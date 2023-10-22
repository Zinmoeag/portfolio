import Hero from "./components/Hero.js";
import Skill from "./components/Skill.js";
import Ability from "./components/Ability.js";
import Footer from "./components/Footer.js";
import Terminal from './components/Terminal.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import useScroll from '../../hooks/useScrollTop.js'


export default function Welcome(){
	useScroll([],0)
	return (
		<div className="bg-skin-main overflow-hidden">
			<Hero />
			<Terminal />
			<Ability />
			<Skill />
			<Footer />
		</div>
	)
}













