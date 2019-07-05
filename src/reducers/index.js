import { combineReducers } from 'redux';
import productReducer from './productReducer';
import shoppingBasketReducer from './shoppingBasketReducer';

export default combineReducers({
	productReducer,
	shoppingBasketReducer,
});
