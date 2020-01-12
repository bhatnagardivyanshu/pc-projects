import {Link} from 'react-router-dom';

const Portfolio = (props) => {
	return (
		<div>
			<h1>My Work!</h1>
			<p>Check out the things I've Done!</p>
			{props.match.params.id !== undefined && <h1>Param passed is {props.match.params.id}</h1>}
			<p><Link to="/portfolio/project1" >Project-1</Link></p>
			<p><Link to="/portfolio/project2" >Project-2</Link></p>
		</div>
	)
}

export default Portfolio;