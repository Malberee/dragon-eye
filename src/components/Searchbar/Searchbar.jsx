import { useState } from 'react'
import { Input } from '@nextui-org/react'

import { Search } from '../Icons'

import { SearchbarWrapper, SearchbarContainer } from './Searchbar.styled'

const Searchbar = ({ setQuery }) => {
	const [input, setInput] = useState('')

	const inputChange = (value) => {
		setInput(value)
		setQuery(value.toLowerCase())
	}

	return (
		<div className="w-full flex justify-center">
			<Input
				className="max-w-xs"
				type="text"
				placeholder="Enter dragon name"
				value={input}
				onChange={(e) => inputChange(e.target.value)}
			/>
		</div>
	)
}

export default Searchbar
