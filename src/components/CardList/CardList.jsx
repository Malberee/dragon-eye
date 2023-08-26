import React from 'react'
import Card from '../Card'
import { CardListWrapper } from './CardList.styled'

const CardList = ({ dragons, toggleModal }) => (
	<CardListWrapper>
		{dragons.map((dragon) => (
			<Card
				key={dragon.name}
				dragon={dragon}
				toggleModal={toggleModal}
			/>
		))}
	</CardListWrapper>
)

export default CardList
