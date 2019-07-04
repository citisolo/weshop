import productData from '../products';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';

console.log(productData);
const Product = productData.ProductCollection;

export const getCategories = categories => {
	return { type: GET_CATEGORIES, categories };
};

export const getCategory = category => {
	return { type: GET_CATEGORY, category };
};

export const getProducts = products => {
	return { type: GET_PRODUCTS, products };
};

export const getProduct = product => {
	return { type: GET_PRODUCT, product };
};

export const fetchProducts = name => dispatch => {
	console.log(name);
	const category = Product.filter(p => p.Category === name);
	console.log(category);
	return dispatch(getProducts(category));
};

export const fetchProduct = id => dispatch => {
	const product = Product.filter(p => p.ProductId === id);
	return dispatch(getProducts(product));
};
