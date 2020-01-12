import React from 'react';
import Option from './Option'

export default class Options extends React.Component{

	render(){
		// console.log(this.props);
		return (
			<div>
				<button onClick={this.props.onClick} disabled={!this.props.hide} >Remove All</button>
				{this.props.options.length === 0 && <p> No Options found! </p> }
				{this.props.options.map((option) => <Option optionText={option} key={option} onClick={this.props.removeOne} />)}
			</div>	
		)
	}
}
