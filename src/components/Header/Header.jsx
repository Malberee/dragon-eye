import React from 'react'

import Searchbar from '../Searchbar'
import { Burger } from '../Icons'

import { HeaderWrapper, MenuButton } from './Header.styled'

const Header = ({ setQuery, openSidebar }) => (
	<div className="bg-default-50 flex justify-center items-center p-4">
		<MenuButton onClick={openSidebar}>
			<Burger width="30px" height="30px" />
		</MenuButton>
		<Searchbar setQuery={setQuery} />
	</div>
)

export default Header
