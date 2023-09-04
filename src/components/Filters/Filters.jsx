import { useDispatch } from 'react-redux'

import { addFilter } from '../../store/filtersSlice'
import useComponentVisible from '../../hooks/useComponentVisible'

import ClassIconsMini from '../ClassIconsMini'
import AbilityIcon from '../AbilityIcon'
import RarityIcon from '../RarityIcon'

import {
	FiltersWrapper,
	CustomCheckbox,
	FiltersList,
	FiltersItem,
	Label
} from './Filters.styled'

const classes = [
	'strike',
	'sharp',
	'tidal',
	'mystery',
	'stoker',
	'tracker',
	'boulder',
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
	'legendary',
	'rare',
	'godly',
	'common',
	'epic',
	'mythical',
	'unique',
]

const Filters = () => {
	const dispatch = useDispatch()

	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false)

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
		<FiltersWrapper
			ref={ref}
			onClick={setIsComponentVisible}
			isOpen={isComponentVisible}
		>
			{/* <img src="./images/icons/checkmark.svg" alt="" /> */}
			<FiltersList>
				<FiltersItem>
					{classes.map((classItem) => (
						<Label key={classItem}>
							<CustomCheckbox
								type="checkbox"
								onChange={handleFilter}
								name="classes"
								id={classItem}
							/>
							<ClassIconsMini classes={[classItem]} Width={18} />
							{classItem}
						</Label>
					))}
				</FiltersItem>
				<FiltersItem>
					{rarity.map((rarityItem) => (
						<Label key={rarityItem}>
							<CustomCheckbox
								type="checkbox"
								onChange={handleFilter}
								name="rarities"
								id={rarityItem}
							/>
							<RarityIcon rarity={rarityItem} width={18} />
							{rarityItem}
						</Label>
					))}
				</FiltersItem>
				<FiltersItem>
					{abilities.map((abilityItem) => (
						<Label key={abilityItem}>
							<CustomCheckbox
								type="checkbox"
								onChange={handleFilter}
								name="abilities"
								id={abilityItem}
							/>
							<AbilityIcon ability={abilityItem} width={18} />
							{abilityItem}
						</Label>
					))}
				</FiltersItem>
			</FiltersList>
		</FiltersWrapper>
	)
}

export default Filters
