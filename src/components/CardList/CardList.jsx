import React from 'react'
import Card from '../Card'
import { CardListWrapper } from './CardList.styled'

const CardList = ({ dragons, toggleModal, setDragon }) => (
	<CardListWrapper>
		{dragons.map((dragon) => (
			<Card key={dragon.name} dragon={dragon} toggleModal={toggleModal} setDragon={setDragon} />
		))}
	</CardListWrapper>
)

CardList.propTypes = {}

CardList.defaultProps = {}

export default CardList
