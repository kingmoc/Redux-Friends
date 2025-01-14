import { LOGIN_START, 
		 LOGIN_SUCCESS, 
		 LOGIN_FAIL,
		 FETCH_DATA_START,
		 FETCH_DATA_SUCCESS,
		 FETCH_DATA_FAIL,
		 ADD_DATA_START,
		 ADD_DATA_SUCCESS,
		 ADD_DATA_FAIL
	   } from "../actions";


const initialState = {
	friends: [],
	deletingFriend: false,
	fetchingFriends: false,
	loggingIn: false,
	addingFriends: false,
	editingFriend: false,
	error: null
  }

  export const friendsReducer = (state = initialState, action) => {
  
	switch (action.type) {
		
		case LOGIN_START:
			return {
				...state,
				loggingIn: true,
				error: ''
			}
	
		case LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: false
			}

		case FETCH_DATA_START:
			return {
				...state,
				error: '',
				fetchingFriends: true
			}

		case FETCH_DATA_SUCCESS:
			return {
				...state,
				fetchingFriends: false,
				friends: action.payload

			}
	
		case FETCH_DATA_FAIL:
			return {
				...state,
				fetchingFriends: false,
				error: action.payload
			}

		case ADD_DATA_START:
			return {
				...state, 
				error: '',
				addingFriends: true
			}
		
		case ADD_DATA_SUCCESS:
		return {
			...state, 
			friends: action.payload,
			error: '',
			addingFriends: false
		}

		default:
			return state;
	}

}