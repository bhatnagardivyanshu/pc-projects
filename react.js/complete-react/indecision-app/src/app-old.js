class IndecisionApp extends React.Component{

	constructor(props){
		super(props);
		// console.log(props);
		this.state = {
			options: []
		} //	allowing us to get options as props or otherwise take data from defaultProps set.
		// console.log(this.state);
		this.handlePick = this.handlePick.bind(this);
		this.handleRemoveOne = this.handleRemoveOne.bind(this);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handleAction = this.handleAction.bind(this);
	}

	componentDidMount(){
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			
			if(options){
				this.setState(() => {
					return {
						options
					}
				})
			}

		}catch(e){
			console.log('Exception caught!');
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	handlePick(e){

		e.preventDefault();
		const element = e.target.elements.option;
		const newOption = element.value;
		element.value = "";
		if(this.state.options.indexOf(newOption) === -1){
			this.setState((prevState) => {
				const newOptionsArray = prevState.options.concat(newOption);
				return {
					options: newOptionsArray
				}
			})
		}
	}

	handleRemoveOne(option){
		this.setState((prevState) => {
			return {
				options: prevState.options.filter((val) => val !== option)
			}
		})
		console.log(this.state);
	}

	handleRemoveAll(){
		this.setState(() => ({ options: [] }))
	}

	handleAction(){
		if(this.state.options.length){
			const rand = Math.floor(Math.random() * this.state.options.length);
			alert(this.state.options[rand])
		}
	}

	render(){
		const title = "Indecision";
		const subtitle = "A to do app";

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action onClick={this.handleAction} />
				<Options options={this.state.options} onClick={this.handleRemoveAll} removeOne={this.handleRemoveOne} />
				<AddOption onSubmit={this.handlePick} />
			</div>
		)
	}
}

// allowing Component to receive values as props or otherwise set default
// IndecisionApp.defaultProps = {
// 	options: []
// }

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>	
	)
}

Header.defaultProps = {
	title: "Some default!"
}

function Action(props) {

	return (<div><button onClick={props.onClick}>What should I do?</button></div>)
}

class Options extends React.Component{

	render(){
		console.log(this.props);
		return (
			<div>
				<button onClick={this.props.onClick} >Remove All</button>
				{this.props.options.length === 0 && <p> No Options found! </p> }
				{this.props.options.map((option) => <Option optionText={option} key={option} onClick={this.props.removeOne} />)}
			</div>	
		)
	}
}

function Option(props){
	return <p
		className="option"
		onClick={() => {props.onClick(props.optionText)}} >{props.optionText}
		<span className="cross">x</span>
	</p>
}

class AddOption extends React.Component{

	render(){
		// console.log(this);
		return (
			<div>
				<form onSubmit={(e) => {this.props.onSubmit(e)}}>
					<input type="text" name="option" />	
					<button type="submit" >Submit</button>		
				</form>
			</div>	
		)
	}
}

ReactDOM.render(<IndecisionApp options={[1,2,3,4,5]} />,	document.getElementById('app'))