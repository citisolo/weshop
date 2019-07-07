import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'semantic-ui-react';

import CategoryMenu from './CategoryMenu';

import productData from '../products';

const collection = productData.ProductCollection;
const categories = [...new Set(collection.map(product => product.Category))];

describe('<CategoryMenu />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<CategoryMenu categories={categories} />);
		expect(wrapper);
	});

	it('renders all items', () => {
		const wrapper = shallow(<CategoryMenu categories={categories} />);
		expect(wrapper.find(Dropdown.Item).length).toBe(25);
	});
});
