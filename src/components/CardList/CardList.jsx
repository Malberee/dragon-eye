import React from 'react'
import Card from '../Card'
import { CardListWrapper } from './CardList.styled'

const CardList = ({ dragons, toggleModal }) => (
	<CardListWrapper>
		{dragons.length > 0 ? (
			dragons.map((dragon) => (
				<Card key={dragon.name} dragon={dragon} toggleModal={toggleModal} />
			))
		) : (
			<p>There are no known dragon species for your query at this time</p>
		)}
	</CardListWrapper>
)

export default CardList
