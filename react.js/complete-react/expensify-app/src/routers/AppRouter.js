import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpExpensePage from '../components/HelpExpensePage.js';
import NotFoundPage from '../components/NotFoundPage.js';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" exact={true} component={ExpenseDashboardPage} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/HELP" component={HelpExpensePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;