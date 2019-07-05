import React, { useEffect, useState } from 'react';
import FlexList from '../components/FlexList';
import { Container, Loader, Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/actions';

const Home = props => {
	const {
		products,
		match: { params },
	} = props;

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		props.dispatch(fetchProducts(params.category));
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Loader active />
	) : (
		<Container>
			<Header as="h2" attached="top">
				{params.category}
			</Header>
			<Segment attached>
				<FlexList items={products} />
			</Segment>
		</Container>
	);
};

const mapStateToProps = state => {
	const { productReducer } = state;
	const { products } = productReducer;

	return {
		products,
	};
};

export default connect(mapStateToProps)(Home);
