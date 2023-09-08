import React from 'react'

import RarityIcon from '../RarityIcon'

import { RarityStickerWrapper } from './RaritySticker.styled'

const RaritySticker = ({ rarity, withLink }) => (
	<RarityStickerWrapper className="sticker" withLink={withLink}>
		<RarityIcon rarity={rarity} width={40} />
	</RarityStickerWrapper>
)

export default RaritySticker
