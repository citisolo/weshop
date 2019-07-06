import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProduct, addProductToBasket } from '../actions/actions';
import { Image, Button, Header, Label, Confirm } from 'semantic-ui-react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	div {
		margin: 0.2em;
		width: 100%;
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
		width: 30%;
		align-self: flex-end;
	}
`;

const AddProductConfirm = props => {
	const { open, closeConfirm, confirm, header, content } = props;
	return <Confirm open={open} onCancel={closeConfirm} onConfirm={confirm} content={header} confirmButton={content} />;
};

const Product = props => {
	const {
		history,
		product,
		match: { params },
	} = props;

	const productId = params.id;
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const getProductById = id => {
			props.dispatch(fetchProduct(id));
		};

		getProductById(productId);
	}, []);

	const onAddProduct = () => {
		props.dispatch(addProductToBasket({ quantity: 1, product }));
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const onConfirm = () => {
		history.push('/basket');
	};

	return (
		<React.Fragment>
			<AddProductConfirm
				open={open}
				closeConfirm={onClose}
				confirm={onConfirm}
				header={'Item Added to Basket'}
				content={'Go to basket ?'}
			/>
			<ProductWrapper>
				<Image src={`/${product.ProductPicUrl}`} bordered size="medium" />
				<ProductDataWrapper>
					<Header as="h2">{product.Description}</Header>
					<Header as="h3">
						<Label>{`£${product.Price}`}</Label>
					</Header>
					<Button onClick={onAddProduct}>Add to basket</Button>
				</ProductDataWrapper>
			</ProductWrapper>
		</React.Fragment>
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
