import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// action generators
const incrementCount = (by = 0) => ({
	type: "INCREMENT",
	by
});

const decrementCount = (by = 0) => ({
	type: "DECREMENT",
	by
});

const reducerFunction = (state = {count: 0}, action) => {

	switch(action.type){

		case "INCREMENT":
			return {
				count: state.count + action.by
			};
		case "DECREMENT":
			return {
				count: state.count - action.by
			};
		default:
			throw new Error("Invalid action type!");
	}
}

const store = createStore(reducerFunction);