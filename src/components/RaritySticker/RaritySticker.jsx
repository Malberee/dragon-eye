import React from 'react'

import RarityIcon from '../RarityIcon'
import { TooltipLink } from '../Card/Card.styled'

import { RarityStickerWrapper } from './RaritySticker.styled'

const RaritySticker = ({ rarity }) => (
	<RarityStickerWrapper>
		<TooltipLink
			data-tooltip-id="my-tooltip"
			data-tooltip-content={`Rarity: ${rarity}`}
			className="sticker"
		>
			<RarityIcon rarity={rarity} width={40} />
		</TooltipLink>
	</RarityStickerWrapper>
)

RaritySticker.propTypes = {}

RaritySticker.defaultProps = {}

export default RaritySticker
