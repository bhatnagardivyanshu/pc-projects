import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

// if error -> React not defined
// window.React = React;

render(
	<App />,
	document.getElementById('react-container')
);


