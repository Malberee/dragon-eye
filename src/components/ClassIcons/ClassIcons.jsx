import React from 'react'
import { nanoid } from 'nanoid'
import { IconsWrapper, Icon } from './ClassIcons.styled'

const ClassIcons = ({ classes }) => {
	return (
		<IconsWrapper>
			{classes.map((dragonClass) => (
				<Icon
					key={nanoid()}
					src={`../../src/assets/icons/classesMini/${dragonClass}.png`}
					countClasses={classes.length}
				/>
			))}
		</IconsWrapper>
	)
}

export default ClassIcons
