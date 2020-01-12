 import React from 'react'

 export default class Settings extends React.Component{

 	render() {

 		console.log(this.props.match); 	

 		const { param1 } = this.props.match.params;
 		const { param2 } = this.props.match.params;

 		console.log(param1);

 		const query = this.props.location;
 		const date = query.date;

 		return(
 			<div>
 				<h1>Settings { param1 != undefined ? '( ' + param1.toUpperCase() + " )" : ""}</h1>
 				<h1>Settings { param2 != undefined ? '( ' + param2.toUpperCase() + " )" : ""}</h1>
 			</div>
		)
 	}

 }