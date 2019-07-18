import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { connect } from "react-redux";
import '../styles/FriendList.scss'

import { getData } from '../actions'

import Friend from "../components/Friend"


class FriendList extends Component {
	
	toForm = e => {
		e.preventDefault();
		console.log(this.props)
		this.props.history.push('/add-friend')
	}

	componentDidMount() {
		this.props.getData();
	}

	render() {
		// console.log(this.props.friendsList)
		return (
			<div className="container">
		
				<div className="title-top">
					<h1> List of Friends </h1> 					
				</div>

				{this.props.fetchingFriends && (
				<div className="fetch-load">
				<Loader type="Puff" color="#204963" height="60" width="100" />
				<p>Loading Data</p>
          		</div>
				)}

				{this.props.error && <h4> {this.props.error} </h4>}

				{!this.props.fetchingFriends && this.props.friends.length > 0 && (
				<div className="container">
				<button onClick={this.toForm}>Add Friend</button>
				{this.props.friends.map(friend => {
					return (
						<Friend 
						{...this.props} 
						key={friend.id} 
						friend={friend} 
						// editUpdate={this.props.editUpdate}
						/>
					)
				})}
				</div>
				)}

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.friendsReducer.friends)
	return {
		friends: state.friendsReducer.friends,
		fetchingFriends: state.friendsReducer.fetchingFriends,
		error: state.friendsReducer.error
	}
	
}

export default connect(mapStateToProps, {getData})(FriendList);