import React from 'react'
import PropTypes from 'prop-types'
import { RarityIconWrapper } from './RarityIcon.styled'

const RarityIcon = ({ rarity, width }) => (
	<img src={`./images/icons/rarities/${rarity}.png`} width={width} />
)

RarityIcon.propTypes = {}

RarityIcon.defaultProps = {}

export default RarityIcon
