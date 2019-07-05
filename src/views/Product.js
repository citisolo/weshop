import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/actions';
import FlexList from '../components/FlexList';
import { Image, Grid, Button, Header, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	div {
		margin: 0.2em;
	}
`;

const ProductDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	h3 {
		align-self: flex-end;
		.ui.label {
			font-size: large;
		}
	}
	button {
		width: 20%;
		align-self: flex-end;
	}
`;

const Product = props => {
	const {
		product,
		match: { params },
	} = props;

	const productId = params.id;

	useEffect(() => {
		const getProductById = id => {
			props.dispatch(fetchProduct(id));
		};

		getProductById(productId);
	}, []);

	return (
		<ProductWrapper>
			<Image src={`/${product.ProductPicUrl}`} bordered size="medium" />
			<ProductDataWrapper>
				<Header as="h2">{product.Description}</Header>
				<Header as="h3">
					<Label>{`£${product.Price}`}</Label>
				</Header>
				<Button>Add to basket</Button>
			</ProductDataWrapper>
		</ProductWrapper>
	);
};

const mapStateToProps = state => {
	console.log(state);
	const {
		productReducer: { product },
	} = state;

	return {
		product,
	};
};

export default connect(mapStateToProps)(Product);
