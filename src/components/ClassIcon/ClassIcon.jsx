import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './ClassIcon.styled'

const ClassIcon = ({ classes }) => (
	<Icon src={`/src/images/icons/classes/${classes[0]}.png`} />
)

ClassIcon.propTypes = {}

ClassIcon.defaultProps = {}

export default ClassIcon
