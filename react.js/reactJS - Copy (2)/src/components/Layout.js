import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {

	constructor() {
		super();

		this.name = "Divyanshu";
		this.state = {directory: "Home/"};
	}
 
	changeTitle(directory) {
		this.setState({directory})
	}

	//1. basic thing a component does
	render() {

	// const name = "Divyanshu";

		return (
			<div>
				<h1>Welcome {this.name} !</h1>
				<Header changeTitle={this.changeTitle.bind(this)} dir={this.state.directory}/>
				<Footer />
			</div>
		)
	}
}
