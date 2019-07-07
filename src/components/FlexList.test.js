import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import FlexList from './FlexList';
import { Card } from 'semantic-ui-react';

import productData from '../products';

const collection = productData.ProductCollection;
const subset = collection.slice(0, 10);

describe('<FlexList />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<FlexList items={subset} />);
		expect(wrapper);
	});

	it('should render all items in array', () => {
		const wrapper = shallow(<FlexList items={subset} />);
		expect(wrapper.find('.product-card').length).toBe(10);
	});
});
