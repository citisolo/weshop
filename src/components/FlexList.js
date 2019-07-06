import React from 'react';
import { List, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const FlexItemWrapper = styled.div`
	margin: 0.5em;
	display: flex;
`;

const FlexList = ({ items }) => {
	const formatList = list => {
		return list.map(item => (
			<FlexItemWrapper key={item.ProductId}>
				<Card>
					<Link to={`/product/${item.ProductId}`}>
						<Image src={item.ProductPicUrl} bordered size="medium" />
					</Link>
					<Card.Header>{item.Name}</Card.Header>
				</Card>
			</FlexItemWrapper>
		));
	};

	return <FlexWrapper>{formatList(items)}</FlexWrapper>;
};

export default FlexList;
