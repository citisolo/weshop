import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CategoryMenu = props => {
	const { categories } = props;
	const [activeItem, setActiveItem] = useState('');

	let menuItems = categories.map((category, i) => {
		return (
			<Link to={`/${category}`} key={category} data-cy="category-item">
				<Dropdown.Item name={category} active={activeItem === category}>
					{category}
				</Dropdown.Item>
			</Link>
		);
	});

	return (
		<Menu>
			<Menu.Item header>
				<Link to="/">OnlineShop</Link>
			</Menu.Item>
			<Dropdown item text="Categories" data-cy="category">
				<Dropdown.Menu>{menuItems}</Dropdown.Menu>
			</Dropdown>
			<Menu.Item>
				<Link to="/basket">View Basket</Link>
			</Menu.Item>
		</Menu>
	);
};

export default CategoryMenu;
