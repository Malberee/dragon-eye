import React from 'react'
import { nanoid } from 'nanoid'
import { IconsWrapper, Icon } from './ClassIconsMini.styled'

const ClassIconsMini = ({ classes }) => {
	return (
		<IconsWrapper>
			{classes.map((dragonClass) => (
				<Icon
					key={nanoid()}
					src={`/src/images/icons/classesMini/${dragonClass}.png`}
					countClasses={classes.length}
				/>
			))}
		</IconsWrapper>
	)
}

export default ClassIconsMini
