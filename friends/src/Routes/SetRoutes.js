import React from 'react';

import { Route } from 'react-router-dom'

import Login from '../components/Login'
import NavBar from '../components/NavBar'

const SetRoutes = (props) => {
	

	return (
		<div>

			<Route exact path="/" component={NavBar} />

			<Route 
			path="/login" 
			render={props => (
			<Login 
			{...props}
			/>
			)} />	

		</div>
	)
};

export default SetRoutes;