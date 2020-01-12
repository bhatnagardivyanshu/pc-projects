import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{

	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/archives">Archives</Link></li>
					<li><Link to="/about">Featured</Link></li>
					<li><Link to="/settings/">Settings Without Param</Link></li>
					<li><Link to="/settings/paramA">Settings - Param 1 </Link></li>
					<li><Link to="/settings/paramB/param-b">Settings - Param 2 </Link></li>
				</ul>
			</div>
		)
	}

}