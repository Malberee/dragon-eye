import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './AbilityIcon.styled'

const AbilityIcon = ({ ability }) => (
	<Icon src={`./src/images/icons/abilities/${ability}.png`} />
)

AbilityIcon.propTypes = {}

AbilityIcon.defaultProps = {}

export default AbilityIcon
