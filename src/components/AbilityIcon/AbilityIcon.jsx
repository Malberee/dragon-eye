import React from 'react'

const AbilityIcon = ({ ability, width, svg }) => (
	<img
		src={`./images/icons/abilities/${svg ? 'svg/' : ''}${ability}.${
			svg ? 'svg' : 'png'
		}`}
		width={width}
	/>
)

export default AbilityIcon
