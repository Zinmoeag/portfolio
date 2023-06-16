import React,{useRef, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import Hero from "./components/Hero.js";
import Nav from "./components/Nav.js";
import Skill from "./components/Skill.js";
import Ability from "./components/Ability.js";
import ContactSection from "./components/Contact.js";

import LinkGroup from "../../components/LinkGroup.js";
import LogoSlider from "../../components/LogoSlider.js";

import abilityPhoto from "../../assets/image/ability.png";
import { faArrowUpRightFromSquare,faCheck,faQuoteLeft,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SectionAnimation from "../../components/SectionAnimation.js";

import imagelazyLoad from "../../assets/css/imagelazyLoad.css";


export default function Home(){

	return (
		<>
		
		<Nav />
		<Hero />


		<SectionAnimation>
			<Skill />
		</SectionAnimation>

		<SectionAnimation option={"right"}>
			<Ability />
		</SectionAnimation>


		<LogoSlider className="py-20" />

		<ContactSection />
		
		
		</>

	)
}













