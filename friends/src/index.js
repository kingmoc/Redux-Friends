//Basic Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Component Import
import App from './App';

// CSS Import
import './index.scss';

// Router Imports
import { BrowserRouter as Router } from "react-router-dom";

// Redux Imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
// Dependancies
import thunk from 'redux-thunk'

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const store = {}

ReactDOM.render(
	// <Provider store={store}>
		<Router>
			<App />
		</Router>
	// </Provider>
,document.getElementById('root')
);


