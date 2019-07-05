import React from 'react';
import FlexList from '../components/FlexList';
import { List, Divider, Container, Label, Menu, Segment } from 'semantic-ui-react';
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
	margin: 2em 10em;
	border: 1px solid rgba(34, 36, 38, 0.15);
	height: 50em;
	padding: 2em;
`;

const Basket = props => {
	console.log(props);
	const { basket } = props;

	const calculateTotal = () => {
		let cost = 0;
		basket.forEach(item => {
			cost += item.product.Price;
		});
		return cost;
	};

	const items = basket.map(item => (
		<List.Item>
			<ListWrapper>
				<ListItemWrapper>{`${item.product.Name}`}</ListItemWrapper>
				<ListItemWrapper>
					<Label>{`£${item.product.Price}`}</Label>
				</ListItemWrapper>
				<ListItemWrapper>
					<Label>{`Quan: ${item.quantity}`}</Label>
				</ListItemWrapper>
			</ListWrapper>
		</List.Item>
	));
	return (
		<ShoppingBasketWrapper>
			<Segment>
				<List divided relaxed>
					{items}
				</List>
			</Segment>
			<Segment>
				<List>
					<List.Item>
						<ListWrapper>
							<ListItemWrapper>{`Total: ${calculateTotal()}`}</ListItemWrapper>
						</ListWrapper>
					</List.Item>
				</List>
			</Segment>
		</ShoppingBasketWrapper>
	);
};

const mapStateToProps = state => {
	const { shoppingBasketReducer } = state;
	console.log(state);
	return {
		basket: shoppingBasketReducer.basket,
	};
};

export default connect(mapStateToProps)(Basket);
