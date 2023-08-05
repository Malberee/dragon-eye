import React from 'react'
import Card from '../Card'
import { CardListWrapper } from './CardList.styled'

const CardList = ({ dragons }) => (
	<CardListWrapper>
		{dragons.map((dragon) => (
			<Card key={dragon.name} dragon={dragon} />
		))}
	</CardListWrapper>
)

CardList.propTypes = {}

CardList.defaultProps = {}

export default CardList
