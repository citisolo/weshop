import productData from '../products';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const Product = productData.ProductCollection;
const Basket = productData.Basket;

export const getCategories = categories => {
	return { type: GET_CATEGORIES, categories };
};

export const getCategory = category => {
	return { type: GET_CATEGORY, category };
};

export const getProducts = products => {
	return { type: GET_PRODUCTS, products };
};

export const addProduct = product => {
	return { type: ADD_PRODUCT, basketItem: product };
};

export const removeProduct = productId => {
	return { type: REMOVE_PRODUCT, productId };
};

export const getProduct = product => {
	return { type: GET_PRODUCT, product };
};

export const fetchProducts = name => dispatch => {
	const category = Product.filter(p => p.Category === name);
	return dispatch(getProducts(category));
};

export const fetchProduct = id => dispatch => {
	const product = Product.filter(p => p.ProductId === id);
	return dispatch(getProduct(product[0]));
};

export const addProductToBasket = product => dispatch => {
	return dispatch(addProduct(product));
};

export const removeProductFromBasket = productId => dispatch => {
	return dispatch(removeProduct(productId));
};
