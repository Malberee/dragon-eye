import React from 'react'

import Card from '../Card'

import {
	CardListWrapper,
	SimplebarStyles,
} from './CardList.styled'

const CardList = ({ dragons, toggleModal }) => (
	<SimplebarStyles>
		<CardListWrapper>
				{dragons.length > 0 ? (
					dragons.map((dragon) => (
						<Card key={dragon.id} dragon={dragon} toggleModal={toggleModal} />
					))
				) : (
					<p>
						There are no known dragon species for your query at this time
					</p>
				)}
		</CardListWrapper>
	</SimplebarStyles>
)

export default CardList
