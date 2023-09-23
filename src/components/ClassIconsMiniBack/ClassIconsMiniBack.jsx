import React from 'react'
import { IconsWrapper, Icon } from './ClassIconsMiniBack.styled'
import { uid } from 'uid'

const ClassIconsMiniBack = ({ classes }) => {
  const getClassesArray = () => {
    if (classes.length > 1) {
      return [...classes, ...[...classes].reverse()]
    }

    return Array(4).fill(classes).flat()
  }

  return (
    <IconsWrapper>
      {getClassesArray().map((dragonClass) => (
        <Icon
          key={uid()}
          src={`./images/icons/classesMini/${dragonClass}.png`}
          alt="class icon"
        />
      ))}
    </IconsWrapper>
  )
}

export default ClassIconsMiniBack
