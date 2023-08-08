import React from 'react'
import Searchbar from '../Searchbar'
import { HeaderWrapper } from './Header.styled'

const Header = ({ setQuery }) => (
	<HeaderWrapper>
		<Searchbar setQuery={setQuery} />
		
	</HeaderWrapper>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
