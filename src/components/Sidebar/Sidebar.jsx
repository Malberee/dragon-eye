import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CheckboxGroup, Checkbox as CheckboxNextUI } from '@nextui-org/react'

import { addFilter } from '../../redux/filters/slice'

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

const rarities = [
  'common',
  'rare',
  'epic',
  'mythical',
  'legendary',
  'godly',
  'unique',
]

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [selectedClasses, setSelectedClasses] = useState([])
  const [selectedRarities, setSelectedRarities] = useState([])
  const [selectedAbilities, setSelectedAbilities] = useState([])

  const dispatch = useDispatch()

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const handleFilter = (e) => {
    dispatch(
      addFilter({
        type: e.type,
        values: e.values,
      }),
    )
  }

  return (
    <>
      <Backdrop onClick={closeSidebar} isOpen={isOpen} />
      <SidebarWrapper isOpen={isOpen} className="bg-default-50">
        <FiltersList>
          <FiltersItem>
            <CheckboxGroup
              color="secondary"
              label="Classes"
              classNames={{
                label: 'text-left',
              }}
              value={selectedClasses}
              onValueChange={setSelectedClasses}
              onChange={(values) => {
                setSelectedClasses(values)
                handleFilter({ type: 'classes', values: values })
              }}
            >
              {classes.map((classItem) => (
                <CheckboxNextUI
                  key={classItem}
                  value={classItem}
                  className="flex"
                  size="sm"
                  classNames={{
                    label: 'flex gap-0.5 items-center',
                  }}
                >
                  <ClassIconsMini classes={[classItem]} Width={18} svg />
                  {capitalizeFirstLetter(classItem)}
                </CheckboxNextUI>
              ))}
            </CheckboxGroup>
          </FiltersItem>
          <FiltersItem>
            <CheckboxGroup
              color="secondary"
              label="Rarity"
              classNames={{
                label: 'text-left',
              }}
              value={selectedRarities}
              onValueChange={setSelectedRarities}
              onChange={(values) => {
                setSelectedRarities(values)
                handleFilter({ type: 'rarities', values: values })
              }}
            >
              {rarities.map((rarityItem) => (
                <CheckboxNextUI
                  key={rarityItem}
                  value={rarityItem}
                  className="flex"
                  size="sm"
                  classNames={{
                    label: 'flex gap-0.5 items-center',
                  }}
                >
                  <RarityIcon rarity={rarityItem} width={18} svg />
                  {capitalizeFirstLetter(rarityItem)}
                </CheckboxNextUI>
              ))}
            </CheckboxGroup>
          </FiltersItem>
          <FiltersItem>
            <CheckboxGroup
              color="secondary"
              label="Abilities"
              classNames={{
                label: 'text-left',
              }}
              value={selectedAbilities}
              onValueChange={setSelectedAbilities}
              onChange={(values) => {
                setSelectedAbilities(values)
                handleFilter({ type: 'abilities', values: values })
              }}
            >
              {abilities.map((abilityItem) => (
                <CheckboxNextUI
                  key={abilityItem}
                  value={abilityItem}
                  className="flex"
                  size="sm"
                  classNames={{
                    label: 'flex gap-1 items-center',
                  }}
                >
                  <AbilityIcon ability={abilityItem} width={12} svg />
                  {capitalizeFirstLetter(abilityItem)}
                </CheckboxNextUI>
              ))}
            </CheckboxGroup>
          </FiltersItem>
        </FiltersList>
      </SidebarWrapper>
    </>
  )
}

export default Sidebar
