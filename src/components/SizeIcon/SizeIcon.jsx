import React from 'react'
import { Icon } from './SizeIcon.styled'

const SizeIcon = ({ type, number }) => {
	const getSizeIcon = (type, number) => {
		if (number === 6) {
			return number
		}

		if (type === 'sky/sea') {
			return `Sky${number}`
		}

		if (type === 'land') {
			return `Land${number}`
		}
	}

	return (
		<Icon src={`/src/images/icons/sizes/${getSizeIcon(type, number)}.png`} />
	)
}

SizeIcon.propTypes = {}

SizeIcon.defaultProps = {}

export default SizeIcon
