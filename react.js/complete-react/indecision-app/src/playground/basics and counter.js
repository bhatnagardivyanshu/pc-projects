let style = { fontFamily: "verdana", color: "white" }

let page = {
	title		: "Indecision App",
	subTitle 	: "This is a sample react app",
};

let user = {
	// name 	: "Divyanshu Bhatnagar",
	age 	: 23,
	location: "Hari Nagar"
};

let greet = (
	<div>
		<h1 className = "textCenter" >Page Heading: {page.title}</h1>
		{page.subTitle && <p className = "textCenter" >Page Description: {page.subTitle}</p>}
	</div> );

var getLocation = (location) => {
	// return (location ) ? <h3> Location : {location} </h3> : <h3> Location : "Unknown" </h3>;
	if(location){ return <h3> Location : {location} </h3> }
}

let userDetails = (
	<div>
		<h3> Name : {user.name ? user.name : "Anonymous"} </h3>
		{(user.age && user.age >= 20) && <h3> Age  : {user.age}</h3>}  {/* show age if greater than 20 */}
		{getLocation(user.location)}
	</div> );

var count = 0;

function increment(){
	count++;
	console.log(count);
	renderData();
}

const buttonDiv = (
	<div>
		<h1>Count : {count}</h1>
		<button id="inc" onClick={increment} >+1</button>
	</div> );

var app = document.getElementById('app');

const renderData = () => {

	const resultDiv = (
		<div style={style}>
			{/*greet}
			{userDetails*/}
			<h1>{count}</h1>
			{buttonDiv}
		</div>)

	ReactDOM.render(resultDiv, app);
}

renderData();