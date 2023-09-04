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

	console.log(isOpen)

	return (
		<>
			<Backdrop
				onClick={closeSidebar}
				isOpen={isOpen}
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				exit={{
					opacity: 0,
				}}
				transition={{
					duration: 0.2,
					ease: 'easeOut',
				}}
			/>
			<SidebarWrapper
				isOpen={isOpen}
				initial={{
					translateX: '-100%',
				}}
				animate={{
					translateX: 0,
				}}
				exit={{
					translateX: '-100%',
				}}
				transition={{
					duration: 0.2,
					ease: 'easeOut',
				}}
			>
				<FiltersList>
					<FiltersItem>
						<h4>Classes</h4>
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
						<h4>Rarity</h4>
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
						<h4>Abilities</h4>
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
										<AbilityIcon ability={abilityItem} width={18} />
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
