import React, { Component } from 'react';
import "../styles/Login.scss"

class Login extends Component {

	state = {		
		username: '',
		password: ''	
	}

	handleChanges = e => {
		
		this.setState({
			[e.target.name]: e.target.value 			
		});
	}

	login = e => {
		e.preventDefault()
		console.log("works")
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

export default Login;