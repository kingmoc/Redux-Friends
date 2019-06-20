import React, { Component } from 'react';
import "../styles/Login.scss"

import { connect } from "react-redux";
import { login } from '../actions';
// import Loader from 'rea'

class Login extends Component {

	state = {
		credentials: {		
			username: '',
			password: ''
		}	
	}

	handleChanges = e => {
		
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			} 			
		});
	}

	login = e => {
		// console.log(this.props)
		e.preventDefault()
		this.props.login(this.state.credentials)
			.then(() => {
				// const route = this.props.location.state.from || '/list-of-friends';
				this.props.history.push('/list-of-friends')
			})
	}



	render() {
		// console.log(this.state.username)
		return (
			<div className="login">

				<form className="login-text" onSubmit={this.login}>

					<h3> Login </h3>
					<h4> Username: </h4>
					<input
					type="text" 
					value={this.state.username}
					name="username"
					onChange={this.handleChanges}
					/> 
					<h4> Password: </h4>
					<input 
					type="password" 
					value={this.state.password}
					name="password"
					onChange={this.handleChanges}
					/>

					<button>Login</button>

				</form>
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state.friendsReducer.loggingIn)
  
	return {
		loggingIn: state.friendsReducer.loggingIn
	}
  }
  
  export default connect(mapStateToProps, {login})(Login);
