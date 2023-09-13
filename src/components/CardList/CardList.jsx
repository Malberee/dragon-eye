import React from 'react'

import Card from '../Card'

import {
	CardListWrapper,
	NotFoundText,
	SimplebarStyles,
} from './CardList.styled'

const CardList = ({ dragons, toggleModal }) => (
	<SimplebarStyles>
		<div className="py-4 flex flex-wrap justify-center items-center gap-4">
				{dragons.length > 0 ? (
					dragons.map((dragon) => (
						<Card key={dragon.id} dragon={dragon} toggleModal={toggleModal} />
					))
				) : (
					<p>
						There are no known dragon species for your query at this time
					</p>
				)}
		</div>
	</SimplebarStyles>
)

export default CardList
