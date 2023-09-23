import { useSelector } from 'react-redux'

import { selectAllDragons } from '../redux/dragons/selectors'

export const useFilters = () => {
  const { dragons } = useSelector(selectAllDragons)

  const classes = [...new Set(dragons.map((dragon) => dragon.classes).flat())]
  const abilities = [
    ...new Set(dragons.map((dragon) => dragon.abilities).flat()),
  ]
  // const rarities = [...new Set(dragons.map((dragon) => dragon.rarity).flat())]
  const rarities = ['common', 'rare', 'epic', 'mythical', 'legendary', 'godly', 'unique']

  return { classes, abilities, rarities }
}
