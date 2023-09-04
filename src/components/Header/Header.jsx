import React from 'react'

import Searchbar from '../Searchbar'
import { Burger } from '../Icons'

import { HeaderWrapper, MenuButton } from './Header.styled'

const Header = ({ setQuery, openSidebar }) => (
	<HeaderWrapper>
		<MenuButton onClick={openSidebar}>
			<Burger width="30px" height="30px" />
		</MenuButton>
		<Searchbar setQuery={setQuery} />
	</HeaderWrapper>
)

export default Header
