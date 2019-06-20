import React, { Component } from 'react';

// import Friend from "./Friend"


class FriendList extends Component {
	
	// toForm = e => {
	// 	e.preventDefault();
	// 	console.log(this.props)
	// 	this.props.history.push('/form')
	// }

	render() {
		// console.log(this.props.friendsList)
		return (
			<div className="container">
				{/* <div className="title-top">
					<h1> List of Friends </h1> 
					<button onClick={this.toForm}>Add Friend</button>
				</div>
				{this.props.friendsList.map(friend => {
					return (
						<Friend {...this.props} key={friend.id} friend={friend} editUpdate={this.props.editUpdate}/>
					)
				})} */}

				<h1> Hello from FriendList </h1>
			</div>
		);
	}
}

export default FriendList;