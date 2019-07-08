import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import Product from './Product';
import productData from '../products';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

let store;

const collection = productData.ProductCollection;
const categories = [...new Set(collection.map(product => product.Category))];
const category = categories[0];
const products = [...new Set(collection.filter(product => product.Category === category))];
const product = products[0];

const initialState = {
	productReducer: {
		categories,
		category,
		products,
		product,
	},
};

beforeEach(() => {
	store = mockStore(initialState);
});

describe('<Product />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Product store={store} match={{ params: { id: 'HT-1000' } }} />);
		expect(wrapper);
	});

	it('renders product', () => {
		const wrapper = shallow(<Product store={store} match={{ params: { id: 'HT-1000' } }} />);
		expect(wrapper.contains('img'));
	});
});
