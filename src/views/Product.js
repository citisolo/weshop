import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProduct, addProductToBasket } from '../actions/actions';
import { Image, Button, Header, Label, Confirm } from 'semantic-ui-react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	img {
		width: 15em;
		height: 12em;
	}
	flex-wrap: wrap;
	* {
		margin: 1em;
	}
`;

const ProductDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-self: flex-end;

	h3 {
		.ui.label {
			font-size: large;
		}
	}

	button {
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
				<Header as="h2">{product.Name}</Header>
				<Image src={`/${product.ProductPicUrl}`} />
				<Header as="h3">{product.Description}</Header>
				<ProductDataWrapper>
					<Header as="h3">
						<Label>{`£${product.Price}`}</Label>
					</Header>
					<Button content="Buy" onClick={onAddProduct} secondary data-cy="buy-button" />
				</ProductDataWrapper>
			</ProductWrapper>
		</React.Fragment>
	);
};

const mapStateToProps = state => {
	const {
		productReducer: { product },
	} = state;

	return {
		product,
	};
};

export default connect(mapStateToProps)(Product);
