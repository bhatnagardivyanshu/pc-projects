import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header.js';
import Home from '../components/Home.js';
import Portfolio from '../components/Portfolio.js';
import PortfolioItem from '../components/PortfolioItem.js';
import Contact from '../components/Contact.js';
import NotFoundPage from '../components/NotFoundPage.js';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/portfolio" component={Portfolio} exact={true} />
				<Route path="/portfolio/:id" component={PortfolioItem} />
				<Route path="/contact" component={Contact} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;