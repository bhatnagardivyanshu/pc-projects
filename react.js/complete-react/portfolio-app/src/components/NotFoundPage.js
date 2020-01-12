import {Link} from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		Oops Requested Page Not found!
		<p>Go to <Link to="/">Dashboard</Link> Page </p>
	</div>
)

export default NotFoundPage;
