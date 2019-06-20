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

//  Exports for login Dispatches 
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