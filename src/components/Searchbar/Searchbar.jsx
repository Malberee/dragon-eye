import { useState } from 'react'
import { SearchbarWrapper, Input } from './Searchbar.styled'

const Searchbar = ({ setQuery }) => {
	const [input, setInput] = useState('')

	const inputChange = (value) => {
		setInput(value)
		setQuery(value.toLowerCase())
	}

	return (
		<SearchbarWrapper>
			<Input
				type="text"
				onChange={(e) => inputChange(e.target.value)}
				value={input}
			/>
		</SearchbarWrapper>
	)
}

export default Searchbar
