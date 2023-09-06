import React from 'react'

import Card from '../Card'

import {
	CardListWrapper,
	NotFoundText,
	SimplebarStyles,
} from './CardList.styled'

const CardList = ({ dragons, toggleModal }) => (
	<SimplebarStyles>
		<CardListWrapper>
			{dragons.length > 0 ? (
				dragons.map((dragon) => (
					<Card key={dragon.name} dragon={dragon} toggleModal={toggleModal} />
				))
			) : (
				<NotFoundText>
					There are no known dragon species for your query at this time
				</NotFoundText>
			)}
		</CardListWrapper>
	</SimplebarStyles>
)

export default CardList
