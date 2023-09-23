import React from 'react'
import { Icon } from './ClassIcon.styled'

const ClassIcon = ({ dragonClass, countClasses }) => (
	<Icon src={`./images/icons/classes/${dragonClass}.png`} countClasses={countClasses} alt="class icon" />
)

export default ClassIcon
