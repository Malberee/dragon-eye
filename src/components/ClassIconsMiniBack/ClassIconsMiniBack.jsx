import React from 'react'
import { nanoid } from 'nanoid'
import { IconsWrapper, Icon } from './ClassIconsMiniBack.styled'

const ClassIconsMiniBack = ({ classes }) => {
	const getClassesArray = () => {
		if (classes.length > 1) {
			return [...classes, ...classes.reverse()]
		}
		return [...classes, ...classes, ...classes, ...classes]
	}

	return (
		<IconsWrapper>
			{getClassesArray().map((dragonClass) => (
				<Icon
					key={nanoid()}
					src={`./images/icons/classesMini/${dragonClass}.png`}
				/>
			))}
		</IconsWrapper>
	)
}

export default ClassIconsMiniBack
