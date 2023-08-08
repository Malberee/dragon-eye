import { useState } from 'react'
import { SearchbarWrapper, Input } from './Searchbar.styled'

const Searchbar = ({ setQuery }) => {
	const [input, setInput] = useState('')

	const inputChange = (value) => {
		setInput(value.toUpperCase())
		setQuery(value)
	}

	return (
		<Input
			type="text"
			onChange={(e) => inputChange(e.target.value.toLowerCase())}
			value={input}
		/>
	)
}

Searchbar.propTypes = {}

Searchbar.defaultProps = {}

export default Searchbar
