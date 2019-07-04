import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Home from './views/Home';
import Category from './views/Category.js';
import Product from './views/Product.js';
import Basket from './views/Basket.js';
import { fetchProducts } from './actions/actions';

function App(props) {
	const { categories } = props;
	console.log(props);
	const [activeItem, setActiveItem] = useState('');

	const handleItemClick = e => {
		console.log(e.target.text);
		props.dispatch(fetchProducts(e.target.text));
	};

	let menuItems = categories.map((category, i) => {
		return (
			<Menu.Item key={category} name={category} active={activeItem === category} onClick={handleItemClick}>
				{category.name}
			</Menu.Item>
		);
	});

	return (
		<main>
			<Menu>{menuItems}</Menu>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/category" component={Category} />
				<Route path="/product" component={Product} />
				<Route path="/basket" component={Basket} />
			</Switch>
		</main>
	);
}

const mapStateToProps = state => {
	const { productReducer } = state;
	const { categories, category, products, product } = productReducer;

	return {
		categories,
		category,
		products,
		product,
	};
};

export default connect(mapStateToProps)(App);
