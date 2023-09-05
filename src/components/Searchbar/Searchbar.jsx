import { useState } from 'react'

import { Search } from '../Icons'

import {
	SearchbarWrapper,
	Input,
	SearchIconWrapper,
	SearchbarContainer,
} from './Searchbar.styled'

const Searchbar = ({ setQuery }) => {
	const [input, setInput] = useState('')

	const inputChange = (value) => {
		setInput(value)
		setQuery(value.toLowerCase())
	}

	return (
		<SearchbarWrapper>
			<SearchbarContainer>
				<Input
					type="text"
					onChange={(e) => inputChange(e.target.value)}
					value={input}
					placeholder='Enter dragon name'
				/>
				<SearchIconWrapper>
					<Search width="24px" height="24px" />
				</SearchIconWrapper>
			</SearchbarContainer>
		</SearchbarWrapper>
	)
}

export default Searchbar
