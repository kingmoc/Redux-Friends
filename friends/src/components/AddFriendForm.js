import React, { Component } from 'react';
import axios from 'axios'
import '../styles/AddFriendForm.scss'
import { connect } from "react-redux";
import { addData } from '../actions';

class AddFriendForm extends Component {

	state = {
		newFriend: {
			id: Math.floor(Math.random() * (92) + 8),
			name: "",
			age: "",
			email: ""
		}
	}

	toHome = e => {
		e.preventDefault();
		// console.log(this.props.history)
		this.props.history.push('/list-of-friends')
	}

	handleChanges = e => {
		// console.log(e.target.name)
		// console.log(e.target.value)
		// console.log(this.state.newFriend)
		this.setState({
			newFriend: { ...this.state.newFriend,
				[e.target.name]: e.target.value 	
			}			
		});
	}

	addFriend = e => {
		e.preventDefault();
		console.log(this.state.newFriend)
		this.props.addData(this.state.newFriend)

		this.setState({
			newFriend: {
				name: "",
				age: "",
				email: ""
			}		
		});
		this.props.history.push('/list-of-friends')
	}


	render() {
		return (
			<div className="form">
				<h1 className="form-title"> Add Friend </h1>
				<button onClick={this.toHome}> Back </button>

				<form method="post" className="form-info" onSubmit={this.addFriend}>

					<div>
						<h3> Name: </h3>
						<input 
						minlength="5"
						type="text" 
						value={this.state.newFriend.name}
						name="name"
						onChange={this.handleChanges}
						/>
					</div>

					<div>
						<h3> Age: </h3>
						<input 
						minlength="1"
						maxLength="3"
						type="number" 
						value={this.state.newFriend.age}
						name="age"
						onChange={this.handleChanges}
						/>
					</div>

					<div>
						<h3> Email: </h3>
						<input 
						minlength="1"
						type="email" 
						value={this.state.newFriend.email}
						name="email"
						onChange={this.handleChanges}
						/>
					</div>

					<button> Add Friend </button>

				</form>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.friendsReducer.friends)
	return {
		addingFriends: state.friendsReducer.fetchingFriends,
		error: state.friendsReducer.error
	}
	
}

export default connect(mapStateToProps, {addData})(AddFriendForm);
