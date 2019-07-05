import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/actions';
import FlexList from '../components/FlexList';
import { Image, Grid, Button } from 'semantic-ui-react';

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
		<Grid>
			<Grid.Row>
				<Grid.Column width={3}>
					<Image src={`/${product.ProductPicUrl}`} bordered size="medium" />
				</Grid.Column>
				<Grid.Column width={13}>{product.Name}</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					{product.Description}
					{product.Price}
					<Button>Add to basket</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>
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
