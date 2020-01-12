 import React from 'react'

 export default class Test extends React.Component{

	onNavigateHome() {
        this.props.history.push("/");
    }

 	render() {
 		console.log(this.props.match.params);
 		return(
 			<div>
 				<h1>Test</h1>
 				<button onClick={() => this.onNavigateHome()} className="btn btn-primary">Go home!</button>
 			</div>
		)
 	}

 }