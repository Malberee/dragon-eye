import React from 'react'
import { IconsWrapper, Icon } from './ClassIconsMini.styled'
import { uid } from 'uid'

const ClassIconsMini = ({ classes, Width, svg }) => {
	return (
		<IconsWrapper Width={Width}>
			{classes.map((dragonClass) => (
				<Icon
					key={uid()}
					src={`./images/icons/classesMini/${svg ? 'svg/' : ''}${dragonClass}.${
						svg ? 'svg' : 'png'
					}`}
					countClasses={classes.length}
					Width={Width}
				/>
			))}
		</IconsWrapper>
	)
}

export default ClassIconsMini
