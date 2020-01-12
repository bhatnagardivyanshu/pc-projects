import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{

	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/list-days">List Days</Link></li>
					<li><Link to="/add-day">Add Day</Link></li>
				</ul>
			</div>
		)
	}

}