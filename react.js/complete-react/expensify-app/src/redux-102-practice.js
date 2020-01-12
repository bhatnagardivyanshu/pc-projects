import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

// create a reducer function 
const reducerFunction = (state = {}, action) => {
	switch(action.type) {
		case 'I':
			return {
				...state,
				count: state.count+1
			}
	}
}