import React from 'react'
import { AuthorsWrapper, MadeBy, Thanks, Link } from './Authors.styled'

const Authors = () => (
	<AuthorsWrapper>
		<MadeBy>
			Made by{' '}
			<Link href="https://github.com/Malberee" target="_blank">
				Malberee
			</Link>
		</MadeBy>
		<Thanks>
			Thanks to{' '}
			<Link href="https://www.instagram.com/statikinn/" target="_blank">
				Statikin
			</Link>{' '}
			for providing the sources
		</Thanks>
	</AuthorsWrapper>
)

export default Authors
