import React from 'react'
import { useDispatch } from 'react-redux'

import { addFilter } from '../../store/filtersSlice'

import ClassIconsMini from '../ClassIconsMini'
import RarityIcon from '../RarityIcon'
import AbilityIcon from '../AbilityIcon'

import {
	Backdrop,
	SidebarWrapper,
	FiltersList,
	FiltersItem,
	Label,
	Checkbox,
	CustomCheckbox,
	FilterTitle,
} from './Sidebar.styled'

const classes = [
	'stoker',
	'boulder',
	'sharp',
	'tracker',
	'tidal',
	'strike',
	'mystery',
]

const abilities = [
	'electric',
	'speed',
	'stealth',
	'fire',
	'water',
	'ice',
	'armed',
	'supersense',
	'alpha',
	'substance',
	'sound',
	'venom',
	'acid',
	'burrow',
	'spines',
	'chromatic',
]

const rarity = [
	'common',
	'rare',
	'epic',
	'mythical',
	'legendary',
	'godly',
	'unique',
]

const Sidebar = ({ isOpen, closeSidebar }) => {
	const dispatch = useDispatch()

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	const handleFilter = (e) => {
		dispatch(
			addFilter({
				type: e.target.name,
				action: e.target.checked ? 'add' : 'remove',
				value: e.target.id,
			}),
		)
	}

	return (
		<>
			<Backdrop onClick={closeSidebar} isOpen={isOpen} />
			<SidebarWrapper isOpen={isOpen}>
				<FiltersList>
					<FiltersItem>
						<FilterTitle>Classes</FilterTitle>
						<ul>
							{classes.map((classItem) => (
								<li key={classItem}>
									<Label>
										<Checkbox
											type="checkbox"
											onChange={handleFilter}
											name="classes"
											id={classItem}
										/>
										<CustomCheckbox />
										<ClassIconsMini classes={[classItem]} Width={18} />
										{capitalizeFirstLetter(classItem)}
									</Label>
								</li>
							))}
						</ul>
					</FiltersItem>
					<FiltersItem>
						<FilterTitle>Rarity</FilterTitle>
						<ul>
							{rarity.map((rarityItem) => (
								<li key={rarityItem}>
									<Label>
										<Checkbox
											type="checkbox"
											onChange={handleFilter}
											name="rarities"
											id={rarityItem}
										/>
										<CustomCheckbox />
										<RarityIcon rarity={rarityItem} width={18} />
										{capitalizeFirstLetter(rarityItem)}
									</Label>
								</li>
							))}
						</ul>
					</FiltersItem>
					<FiltersItem>
						<FilterTitle>Abilities</FilterTitle>
						<ul>
							{abilities.map((abilityItem) => (
								<li key={abilityItem}>
									<Label>
										<Checkbox
											type="checkbox"
											onChange={handleFilter}
											name="abilities"
											id={abilityItem}
										/>
										<CustomCheckbox />
										<AbilityIcon ability={abilityItem} width={10} svg={true} />
										{capitalizeFirstLetter(abilityItem)}
									</Label>
								</li>
							))}
						</ul>
					</FiltersItem>
				</FiltersList>
			</SidebarWrapper>
		</>
	)
}

export default Sidebar
