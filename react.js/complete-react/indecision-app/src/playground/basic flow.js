let style = { fontFamily: "verdana", color: "white" }

const app = {
	title: "To Do App",
	subtitle: "A to do list application",
	options: []
}

const handleFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option;
	if(option.value) {
		app.options.push(option.value);
		option.value = '';
		option.focus();
	}
	render();
}

const removeAll = () => {
	app.options = [];
	render();
}

const makeDecision = () => {
	const random = Math.floor(Math.random() * app.options.length);
	const option = app.options[random];
	alert(option);
}

var element = document.getElementById('app');

const render = () => {
	
	const resultDiv = (
		<div style={style}>

			<h1 className="textCenter">{app.title}</h1>
			{app.subtitle && <p className="textCenter">{app.subtitle}</p>}
			
			<p>{app.options.length > 0 ? `There are ${app.options.length} option(s) in the list` : "Please add some options!"}</p>

			<button onClick={makeDecision} disabled={app.options.length === 0 }> What should I do</button>

			<ol>
				{
					app.options.map((item, key) => {return <li key={key}>{item}</li>})
				}
			</ol>

			<form onSubmit={handleFormSubmit}>
				<input type="text" name="option" />
				<input type="submit" value="Add Option "/>
			</form>

			<button onClick={removeAll} disabled = {app.options.length === 0}>Remove All</button>

		</div>
	);
	ReactDOM.render(resultDiv, element);
}

render();