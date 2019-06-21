import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'


//  Exports for login Dispatches 
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
// **************************************** 
export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START});
	return axios
		.post('http://localhost:5000/api/login', creds)
		.then(res => {
			localStorage.setItem('token', res.data.payload)
			dispatch({ type: LOGIN_SUCCESS, payload:res.data.payload })
		})
		.catch(err => console.log(err))
}

//  Exports for get Friends Data Dispatches 
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
// **************************************** 
export const getData = () => dispatch => {
	dispatch({ type: FETCH_DATA_START})

	axiosWithAuth()
		.get('/friends')
		.then(res => {
			// console.log(res.data)
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err.response.statusText)
			dispatch({ type: FETCH_DATA_FAIL, payload: err.response.statusText });
		})

}

//  Exports for get Friends Data Dispatches 
export const ADD_DATA_START = 'ADD_DATA_START';
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';
export const ADD_DATA_FAIL = 'ADD_DATA_FAIL';
// **************************************** 

export const addData = (newFriend) => dispatch => {
	dispatch({ type: ADD_DATA_START})

	axiosWithAuth()
		.post('/friends', newFriend)
		.then(res => {
			console.log(res)
			dispatch({ type: ADD_DATA_SUCCESS, payload: res.data})
		})
		.catch(err => {
			console.log(err)
			// dispatch({ type: FETCH_DATA_FAIL, payload: err.response.statusText });
		})

}


// axios.post('http://localhost:5000/friends', this.state.newFriend)
// 			.then((res) => {
// 				this.props.editUpdate(res.data)
// 				this.props.history.push('/')
// 				console.log(res)	
// 			})
// 			.catch((err) => {
// 				console.log(err)
// 			}) 