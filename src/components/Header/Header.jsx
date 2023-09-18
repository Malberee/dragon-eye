import React from 'react'
import { Badge } from '@nextui-org/react'

import Searchbar from '../Searchbar'
import { Burger } from '../Icons'

import { selectFilters } from '../../redux/filters/selectors'

import { HeaderWrapper, MenuButton } from './Header.styled'
import { useSelector } from 'react-redux'

const Header = ({ setQuery, openSidebar }) => {
  const filters = useSelector(selectFilters)

  const isFiltersExistence = () => {
    for (let key in filters) {
      if (filters[key].length) {
        return true
      }
    }
    return false
  }

  return (
    <div className="bg-default-50 flex justify-center items-center p-4">
      <MenuButton onClick={openSidebar}>
        {isFiltersExistence() ? (
          <Badge content="" color="secondary" size="sm" disableOutline>
            <Burger width="30px" height="30px" />
          </Badge>
        ) : (
          <Burger width="30px" height="30px" />
        )}
      </MenuButton>
      <Searchbar setQuery={setQuery} />
    </div>
  )
}

export default Header
