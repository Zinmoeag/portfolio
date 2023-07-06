// import React,{useRef, useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {useTheme} from "../../utilites/ThemeProvider.js";

import Hero from "./components/Hero.js";
import Nav from "../../components/Nav.js";
import Skill from "./components/Skill.js";
import Ability from "./components/Ability.js";
import Form from "./components/Form.js";
import Footer from "./components/Footer.js";

import abilityPhoto from "../../assets/image/ability.png";

import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Welcome(){

	const {theme} = useTheme();

	return (
		<div className="bg-skin-main overflow-hidden">
			<Nav />
			<Hero />
			<Ability />
			<Skill />
			<Form />
			<Footer />
		</div>
	)
}













