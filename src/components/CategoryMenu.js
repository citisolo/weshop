import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/actions';

const CategoryMenu = props => {
	const { categories } = props;
	const [activeItem, setActiveItem] = useState('');

	let menuItems = categories.map((category, i) => {
		return (
			<Menu.Item key={category} name={category} active={activeItem === category}>
				<a href={`/${category}`}>{category}</a>
			</Menu.Item>
		);
	});

	return (
		<Menu>
			<Menu.Item header>OnlineShop</Menu.Item>
			{menuItems}
		</Menu>
	);
};

export default CategoryMenu;
