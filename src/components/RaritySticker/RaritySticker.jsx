import React from 'react'

import RarityIcon from '../RarityIcon'

import { RarityStickerWrapper } from './RaritySticker.styled'

const RaritySticker = ({ rarity }) => (
	<RarityStickerWrapper>
		<RarityIcon rarity={rarity} width={40}  />
	</RarityStickerWrapper>
)

RaritySticker.propTypes = {}

RaritySticker.defaultProps = {}

export default RaritySticker
