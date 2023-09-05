import React from 'react'

import { Icon } from './AbilityIcon.styled'

const AbilityIcon = ({ ability, width, svg }) => (
	<Icon
		src={`./images/icons/abilities/${svg ? 'svg/' : ''}${ability}.${
			svg ? 'svg' : 'png'
		}`}
		width={width}
	/>
)

export default AbilityIcon
