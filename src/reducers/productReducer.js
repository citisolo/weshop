import { GET_CATEGORIES, GET_CATEGORY, GET_PRODUCTS, GET_PRODUCT } from '../actions/actions.js';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return { ...state, categories: action.categories };
		case GET_CATEGORY:
			return { ...state, currentCategory: action.category };
		case GET_PRODUCTS:
			return { ...state, products: action.products };
		case GET_PRODUCT:
			return { ...state, product: action.product };
		default:
			return state;
	}
};
