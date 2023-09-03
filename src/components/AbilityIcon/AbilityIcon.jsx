import React from 'react'
import { Icon } from './AbilityIcon.styled'

const AbilityIcon = ({ ability, width }) => (
	<Icon src={`./images/icons/abilities/${ability}.png`} width={width} />
)

AbilityIcon.propTypes = {}

AbilityIcon.defaultProps = {}

export default AbilityIcon
