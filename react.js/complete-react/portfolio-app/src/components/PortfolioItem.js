import {Link} from 'react-router-dom';

const Portfolio = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Here is my {props.match.params.id}</h1>
			<p>For rest of the details visit github.com/bhatnagardivyanshu</p>
		</div>
	)
}

export default Portfolio;