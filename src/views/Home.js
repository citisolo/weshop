import React from 'react';
import FlexList from '../components/FlexList';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Home = props => {
	const { products } = props;
	return (
		<Container>
			<FlexList items={products} />
		</Container>
	);
};

const mapStateToProps = state => {
	const { productReducer } = state;
	const { categories, category, products, product } = productReducer;

	return {
		categories,
		category,
		products,
		product,
	};
};

export default connect(mapStateToProps)(Home);
