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
	console.log(`[FlexList]: items=${items}`);
	const formatList = list => {
		return list.map(item => (
			<FlexItemWrapper key={item.ProductId}>
				<Card>
					<Image src={item.ProductPicUrl} href={`/product/${item.ProductId}`} bordered size="medium" />
					<Card.Header>{item.Name}</Card.Header>
				</Card>
			</FlexItemWrapper>
		));
	};

	return <FlexWrapper>{formatList(items)}</FlexWrapper>;
};

export default FlexList;
