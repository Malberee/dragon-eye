import { createSelector } from '@reduxjs/toolkit'

export const selectAllDragons = (state) => state.dragons.dragons
export const selectFilters = (state) => state.filters
export const selectDragon = (state, id) =>
	state.dragons.dragons.find((dragon) => dragon.id === id)

export const selectDragonsByFilter = createSelector(
	[selectAllDragons, selectFilters],
	(allDragons, filters) => {
        const { classes, rarities, abilities } = filters
        
		return allDragons.filter((dragon) => {
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
