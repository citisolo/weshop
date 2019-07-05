import React, { useEffect } from 'react';
import { shallow } from 'enzyme';

import Basket from './Basket';

describe('<Basket />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Basket />);
		expect(wrapper);
	});

	it('', () => {});
});
