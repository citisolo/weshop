import React from 'react';
import { List, Card, Image, Header, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexWrapper = styled.div`
	.products {
		display: flex;
		flex-wrap: wrap;
		padding: 3em;
		justify-content: space-evenly;
	}

	.product-card {
		padding: 2%;
		display: flex;
		width: 20em;
		flex-direction: column;
	}

	.product-image img {
		width: 18em;
		height: 13em;
	}

	.product-info {
		font-size: 1em;
	}
`;

const FlexItemWrapper = styled.div`
	margin: 0.5em;
	display: flex;
`;

const FlexList = ({ items }) => {
	const formatList = list => {
		return list.map(item => (
			<div className="product-card" key={item.ProductId}>
				<div className="product-image">
					<Link to={`/product/${item.ProductId}`}>
						<img src={item.ProductPicUrl} alt="..." />
					</Link>
				</div>
				<div className="product-info">
					<Link to={`/product/${item.ProductId}`}>
						<Header as="h3">{item.Name}</Header>
					</Link>
					<h5>
						<Label>{`£${item.Price}`}</Label>
					</h5>
				</div>
			</div>
		));
	};

	return (
		<FlexWrapper>
			<section className="products">{formatList(items)}</section>
		</FlexWrapper>
	);
};

export default FlexList;
