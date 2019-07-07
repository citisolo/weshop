import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/actions.js';

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			// check if product is in basket
			const { basketItem } = action;
			const productInBasket = state.basket.findIndex(p => p.product.ProductId === basketItem.product.ProductId);

			if (productInBasket >= 0) {
				const newBasket = state.basket.map(item => {
					if (item.product.ProductId === basketItem.product.ProductId) {
						return { ...item, quantity: item.quantity + 1 };
					}
					return item;
				});
				return { ...state, basket: newBasket };
			} else {
				return { ...state, basket: [...state.basket, basketItem] };
			}
		}
		case REMOVE_PRODUCT: {
			const { productId } = action;
			const newBasket = state.basket.filter(item => {
				// if item is in array
				if (item.product.ProductId === productId) {
					// if there is more than one decrement quantity
					if (item.quantity > 1) {
						item.quantity--;
						return true;
					} else {
						// drop the item
						return false;
					}
				}
				return true;
			});
			return { ...state, basket: newBasket };
		}
		default:
			return state;
	}
};
