import { createSelector } from '@reduxjs/toolkit'

import { selectFilters } from '../filters/selectors'

export const selectAllDragons = (state) => state.dragons

export const selectDragon = (state, id) =>
  state.dragons.dragons.find((dragon) => dragon.id === id)

export const selectDragonsByFilter = createSelector(
  [selectAllDragons, selectFilters, (_, query) => query],
  (allDragons, filters, query) => {
    const { classes, rarities, abilities } = filters

    const filteredDragonsByName = allDragons.dragons.filter((dragon) =>
      dragon.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .startsWith(query.replace(/\s+/g, '')),
    )

    return filteredDragonsByName.filter((dragon) => {
      if (
        classes.length &&
        !dragon.classes.some((item) => filters.classes.includes(item))
      ) {
        return false
      }
      if (rarities.length && !filters.rarities.includes(dragon.rarity)) {
        return false
      }
      if (
        abilities.length &&
        !filters.abilities.every((item) => dragon.abilities.includes(item))
      ) {
        return false
      }
      return true
    })
  },
)
