import React, { useEffect } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './views/Home';
import Product from './views/Product.js';
import Basket from './views/Basket.js';
import Menu from './components/CategoryMenu';
import { createBrowserHistory } from 'history';

function App(props) {
	const { categories, basket } = props;

	return (
		<main>
			<Router history={createBrowserHistory()}>
				<Menu categories={categories} />
				<Switch>
					<Route path="/basket" component={Basket} />
					<Route exact path="/" render={() => <Redirect to="/Medical" />} />
					<Route exact path="/:category?" component={Home} />
					<Route path="/product/:id" component={Product} />
				</Switch>
			</Router>
		</main>
	);
}

const mapStateToProps = state => {
	const { productReducer, shoppingBasketReducer } = state;
	const { categories } = productReducer;
	const { basket } = shoppingBasketReducer;

	return {
		categories,
	};
};

export default connect(mapStateToProps)(App);
