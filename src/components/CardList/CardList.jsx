import { memo } from 'react'
import { useSelector } from 'react-redux'

import Card from '../Card'

import { selectDragonsByFilter } from '../../redux/dragons/selectors'

import { CardListWrapper, SimplebarStyles } from './CardList.styled'

const CardList = memo(function CardList({ query, openModal }) {
  const dragons = useSelector((state) => selectDragonsByFilter(state, query))

  return (
    <SimplebarStyles>
      <CardListWrapper>
        {dragons.length > 0 ? (
          dragons.map((dragon) => (
            <Card key={dragon.id} dragon={dragon} openModal={openModal} />
          ))
        ) : (
          <p>There are no known dragon species for your query at this time</p>
        )}
      </CardListWrapper>
    </SimplebarStyles>
  )
})

export default CardList
