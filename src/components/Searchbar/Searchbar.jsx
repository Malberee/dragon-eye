import React from 'react'
import PropTypes from 'prop-types'
import { SearchbarWrapper } from './Searchbar.styled'

const Searchbar = ({ setQuery }) => {
	return <input type="text" onChange={(e) => setQuery(e.target.value)} />
}

Searchbar.propTypes = {}

Searchbar.defaultProps = {}

export default Searchbar
