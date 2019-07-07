import React, { useEffect } from 'react';
import { shallow } from 'enzyme';

import Basket from './Basket';
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
	shoppingBasketReducer: {
		basket: [],
	},
};

beforeEach(() => {
	store = mockStore(initialState);
});

describe('<Basket />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Basket store={store} />);
		expect(wrapper);
	});

	it('', () => {});
});
