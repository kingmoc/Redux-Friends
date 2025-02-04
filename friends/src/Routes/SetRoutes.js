import React from 'react';

import { Route } from 'react-router-dom'

import Login from '../components/Login'
import NavBar from '../components/NavBar'
import FriendList from '../containers/FriendList'
import AddFriendForm from '../components/AddFriendForm'
import PrivateRoute from '../Routes/PrivateRoute'

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

			<PrivateRoute exact path="/list-of-friends" component={FriendList} />	

			<PrivateRoute exact path="/add-friend" component={AddFriendForm} />	



		</div>
	)
};

export default SetRoutes;