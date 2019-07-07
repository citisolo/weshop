import React, { useState, useEffect } from 'react';
import { addProductToBasket, removeProductFromBasket } from '../actions/actions';
import { List, Divider, Container, Label, Menu, Segment, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ListWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ListItemWrapper = styled.div`
	margin: 0.1em 0.5em;
`;

const ShoppingBasketWrapper = styled.div`
	border: 1px solid rgba(34, 36, 38, 0.15);
	padding: 2em;
`;

const Basket = props => {
	const { basket } = props;
	const [totalTax, setTax] = useState(0);
	const [totalCost, setTotal] = useState(0);
	const [subTotal, setSubTotal] = useState(0);

	const calculateTax = item => {
		let salesTax = 0.2;
		let duty = 0.05;
		let tax = 0;

		switch (item.product.Category) {
			case 'Food':
			case 'Books':
			case 'Medical':
				break;
			case 'Imported':
				tax += parseFloat(item.product.Price) * parseFloat(duty);
			default:
				tax += parseFloat(item.product.Price) * parseFloat(salesTax);
		}
		return tax;
	};

	const calculateTotal = () => {
		let cost = 0;
		let accTax = 0;
		let accSubTotal = 0;
		basket.forEach(item => {
			let P = parseFloat(item.product.Price);
			let Q = parseFloat(item.quantity);
			let tax = calculateTax(item);
			let total = (P + tax) * Q;
			accTax += tax * Q;
			cost += total;
			accSubTotal += P * Q;
		});

		return { tax: accTax.toFixed(2), cost: cost.toFixed(2), subTotal: accSubTotal.toFixed(2) };
	};

	useEffect(() => {
		const { tax, cost, subTotal } = calculateTotal();
		setSubTotal(subTotal);
		setTax(tax);
		setTotal(cost);
		localStorage.setItem('basket', JSON.stringify(basket));
	}, [basket]);

	const onAddProduct = product => {
		props.dispatch(addProductToBasket({ quantity: 1, product }));
	};

	const onRemoveProduct = id => {
		props.dispatch(removeProductFromBasket(id));
	};

	const items = basket.map(item => (
		<Table.Row>
			<Table.Cell>{`${item.product.Name}`}</Table.Cell>
			<Table.Cell>
				<Label>{`£${item.product.Price}`}</Label>
			</Table.Cell>
			<Table.Cell>
				<Label>{`Quan: ${item.quantity}`}</Label>
			</Table.Cell>
			<Table.Cell>
				<Label onClick={() => onAddProduct(item.product)}>+</Label>
				<Label onClick={() => onRemoveProduct(item.product.ProductId)}>-</Label>
			</Table.Cell>
		</Table.Row>
	));
	return (
		<ShoppingBasketWrapper>
			<Segment>
				<Table>
					<Table.Body>{items.length > 0 ? items : 'Basket Empty'}</Table.Body>
				</Table>
			</Segment>
			<Segment>
				<List>
					<List.Item>
						<ListWrapper>
							<ListItemWrapper>{`Subtotal: £${subTotal}`}</ListItemWrapper>
							<ListItemWrapper>{`Tax: £${totalTax}`}</ListItemWrapper>
							<ListItemWrapper>{`Total: £${totalCost}`}</ListItemWrapper>
						</ListWrapper>
					</List.Item>
				</List>
			</Segment>
		</ShoppingBasketWrapper>
	);
};

const mapStateToProps = state => {
	const { shoppingBasketReducer } = state;
	return {
		basket: shoppingBasketReducer.basket,
	};
};

export default connect(mapStateToProps)(Basket);
