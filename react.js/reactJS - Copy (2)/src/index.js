import React from 'react';
import ReactDOM from 'react-dom'

import Archives from './routes/Archives'
import Featured from './routes/Featured'
import NewLayout from './routes/NewLayout'
import Settings from './routes/Settings'
import Navbar from './components/Navbar'

// <Route path="/:id" component={Child} />

import { BrowserRouter, Route, Router, Link, Switch } from 'react-router-dom'

ReactDOM.render( 
	
	<BrowserRouter>
		<div>
			<Route component={Navbar} />
			<Route exact path="/" component={NewLayout} />
			<Route path="/settings/:param1?/:param2?" component={Settings} />
			<Route path="/archives" component={Archives} />
			<Route path="/about" component={Featured} />
		</div>
	</BrowserRouter>,

	document.getElementById("root")
);