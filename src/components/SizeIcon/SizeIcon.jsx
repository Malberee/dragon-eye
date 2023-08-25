import React from 'react'
import { Icon } from './SizeIcon.styled'

const SizeIcon = ({ type, number }) => {
	const getSizeIcon = (type, number) => {
		if (type === 'sea') {
			return `Land${number}`
		}

		if (type === 'sky/sea') {
			return `Sky${number}`
		}

		if (type === 'land') {
			return `Land${number}`
		}
	}

	return (
		<Icon src={`./images/icons/sizes/${getSizeIcon(type, number)}.png`} />
	)
}

SizeIcon.propTypes = {}

SizeIcon.defaultProps = {}

export default SizeIcon
