import React from 'react'

const RarityIcon = ({ rarity, width, svg }) => (
  <img
    src={`./images/icons/rarities/${svg ? 'svg/' : ''}${rarity}.${
      svg ? 'svg' : 'png'
    }`}
    width={width}
    alt="rarity icon"
  />
)

export default RarityIcon
