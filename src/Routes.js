import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Product from './components/Product';

const Routes = () => (
		<Router >
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/Product" component={Product} />
		</Switch>
		</Router>
);

export default Routes;