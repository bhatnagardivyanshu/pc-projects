import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// reducerFunction

const reducerFunction = (state = 0, action) => {
	switch (action.type){
		case "I":
			return state + 1;
		case "D":
			return state - 1;
		default:
			return state;
	}
}

const store = createStore(reducerFunction);
console.log(store.getState());
console.log(store.dispatch({type: 'I'}));

const Counter = ({value, onIncrement, onDecrement}) => {
	return (
		<div>
			<h1>{value}</h1>
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
		</div>
	)
}

const render = () => {
	ReactDOM.render(
		<div>
			<Counter 
				value = {store.getState()}
				onIncrement = {() => store.dispatch({type: 'I'})}
				onDecrement = {() => store.dispatch({type: 'D'})}
			/>
			<h1>Welcome</h1>
		</div>,
		document.getElementById('app')
	)
};	

store.subscribe(render);
render();
