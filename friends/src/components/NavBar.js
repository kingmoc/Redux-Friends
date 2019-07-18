import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/NavBar.scss"

const NavBar = (props) => {

	return (

		<div className="navBar">
			<h4> Came to see a list of your Friends ...? </h4>
			<Link to="/login">Login</Link>
		</div>	

	)
			
};

export default NavBar;