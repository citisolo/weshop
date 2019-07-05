import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

const CategoryMenu = props => {
	const { categories } = props;
	const [activeItem, setActiveItem] = useState('');

	let menuItems = categories.map((category, i) => {
		return (
			<Dropdown.Item key={category} href={`/${category}`} name={category} active={activeItem === category}>
				{category}
			</Dropdown.Item>
		);
	});

	return (
		<Menu>
			<Menu.Item header>OnlineShop</Menu.Item>
			<Dropdown item text="Categories">
				<Dropdown.Menu>{menuItems}</Dropdown.Menu>
			</Dropdown>
			<Menu.Item href="/basket">View Basket</Menu.Item>
		</Menu>
	);
};

export default CategoryMenu;
