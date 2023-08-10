import React from 'react'
import Searchbar from '../Searchbar'
import { HeaderWrapper } from './Header.styled'

const Header = ({ setQuery }) => (
  <HeaderWrapper>
    <Searchbar setQuery={setQuery} />
  </HeaderWrapper>
)

export default Header
