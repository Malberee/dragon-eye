import React from 'react'
import { Icon } from './SizeIcon.styled'

const SizeIcon = ({ type, number }) => {
  const getSizeIcon = (type, number) => {
    if (type === 'sea' || type === 'land' || type === 'sky/land') {
      return `Land${number}`
    }

    if (type === 'sky' || type === 'sky/sea') {
      return `Sky${number}`
    }
  }

  return <Icon src={`./images/icons/sizes/${getSizeIcon(type, number)}.png`} />
}

export default SizeIcon
