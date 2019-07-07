import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import productData from './products';
import configureStore from './store';
import { createBrowserHistory } from 'history';
import { Container } from 'semantic-ui-react';

const collection = productData.ProductCollection;
const categories = [...new Set(collection.map(product => product.Category))];
const category = categories[0];
const products = [...new Set(collection.filter(product => product.Category === category))];
const product = products[0];

const basket = JSON.parse(localStorage.getItem('basket'));

const initialState = {
	productReducer: {
		categories,
		category,
		products,
		product,
	},
	shoppingBasketReducer: {
		basket: basket === null ? [] : basket,
	},
};

// console.log(initialState);

ReactDOM.render(
	<Provider store={configureStore(initialState)}>
		<BrowserRouter history={createBrowserHistory()}>
			<Container>
				<App />
			</Container>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
