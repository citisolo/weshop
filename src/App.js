import React, { useState } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './views/Home';
import Product from './views/Product.js';
import Basket from './views/Basket.js';
import Menu from './components/CategoryMenu';
import { createBrowserHistory } from 'history';

function App(props) {
	const { categories } = props;

	return (
		<main>
			<Router history={createBrowserHistory()}>
				<Menu categories={categories} />
				<Switch>
					<Route path="/basket" component={Basket} />
					<Route exact path="/" render={() => <Redirect to="/Laptops" />} />
					<Route exact path="/:category?" component={Home} />
					<Route path="/product/:id" component={Product} />
				</Switch>
			</Router>
		</main>
	);
}

const mapStateToProps = state => {
	const { productReducer } = state;
	const { categories } = productReducer;

	return {
		categories,
	};
};

export default connect(mapStateToProps)(App);
