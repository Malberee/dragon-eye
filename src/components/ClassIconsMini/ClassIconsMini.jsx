import React from 'react'
import { IconsWrapper, Icon } from './ClassIconsMini.styled'
import { uid } from 'uid'

const ClassIconsMini = ({ classes }) => {
	return (
		<IconsWrapper>
			{classes.map((dragonClass) => (
				<Icon
					key={uid()}
					src={`./images/icons/classesMini/${dragonClass}.png`}
					countClasses={classes.length}
				/>
			))}
		</IconsWrapper>
	)
}

export default ClassIconsMini
