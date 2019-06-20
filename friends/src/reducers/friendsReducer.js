import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";


const initialState = {
	friends: [],
	deletingFriend: false,
	fetchingFriends: false,
	loggingIn: false,
	savingFriends: false,
	updatingFriend: false,
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

	
		case LOGIN_FAIL:


		default:
			return state;
		}

  }