import React from 'react'
import { Icon } from './ClassIcon.styled'

const ClassIcon = ({ dragonClass, countClasses }) => (
	<Icon src={`/src/images/icons/classes/${dragonClass}.png`} countClasses={countClasses} />
)

export default ClassIcon
