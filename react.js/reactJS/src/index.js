import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import Navbar from './components/Navbar2'
import { Whoops404 } from './components/Whoops404'
import { AddDayForm } from './components/AddDayForm'

import { BrowserRouter, HashRouter, Route, Router, Link, Switch } from 'react-router-dom'

render(
	<HashRouter>
		<div>
			<Route component={Navbar} />
			<Route exact path="/" component={App} />
			<Route exact path="/add-day" component={App} />
			<Route exact path="/list-days" component={App} />
		</div>
	</HashRouter>,
	document.getElementById('react-container')
);


