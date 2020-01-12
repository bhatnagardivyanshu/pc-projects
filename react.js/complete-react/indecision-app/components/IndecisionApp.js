import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options.js';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{

	constructor(props){
		super(props);
		// console.log(props);
		this.state = {
			options: [],
			selectedOption: undefined
		} //	allowing us to get options as props or otherwise take data from defaultProps set.
		// console.log(this.state);
		this.handlePick = this.handlePick.bind(this);
		this.handleRemoveOne = this.handleRemoveOne.bind(this);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handleAction = this.handleAction.bind(this);
		this.closeModal = this.closeModal.bind(this);
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
			let newOptions = prevState.options.filter((val) => val !== option);
			console.log(newOptions);
			return {
				options: newOptions
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
			this.setState(() => {
				return {
					selectedOption: this.state.options[rand]
				}
			})
			// alert(this.state.options[rand]);
		}
	}

	closeModal(){
		this.setState(() => {
			return {
				selectedOption: undefined
			}
		})
	}

	render(){
		const title = "Indecision";
		const subtitle = "A to do app";

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action onClick={this.handleAction} hide={this.state.options.length > 0 } />
					<Options
						options={this.state.options} 
						onClick={this.handleRemoveAll}
						removeOne={this.handleRemoveOne}
						hide={this.state.options.length}
					/>
					<AddOption onSubmit={this.handlePick} />
				</div>
				<OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal} />
			</div>
		)
	}
}