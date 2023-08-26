import React from 'react'
import PropTypes from 'prop-types'
import { RarityStickerWrapper, RarityIcon } from './RaritySticker.styled'

const RaritySticker = ({ rarity }) => (
	<RarityStickerWrapper>
		<RarityIcon src={`/images/icons/rarities/${rarity}.png`} />
	</RarityStickerWrapper>
)

RaritySticker.propTypes = {}

RaritySticker.defaultProps = {}

export default RaritySticker
