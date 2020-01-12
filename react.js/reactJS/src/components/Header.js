import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title'

export default class Header extends React.Component {


	constructor(){
		super();
		this.state = { status: "200" }
	}

	handleChange(e) {
		const value = e.target.value;
		this.props.changeTitle(value);
		console.log(this.props);
	}

	render() {

		return (
			<header>
				<Title name="Current Directory: " title={this.props.dir} />			
				<input value={this.props.dir} onChange={this.handleChange.bind(this)} />
				<Title title={this.state.status} />			
				<Title name="Divyanshu Rank:" title="1" />
				<Title name="Ronit Rank:" title="2" />
			</header>
		)
	}

}