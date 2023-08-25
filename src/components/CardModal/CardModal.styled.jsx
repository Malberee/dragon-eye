import styled from 'styled-components'
import { IconsWrapper } from '../ClassIconsMiniBack/ClassIconsMiniBack.styled'

export const CardBackWrapper = styled.div`
	position: relative;

	width: 301px;
	height: 418px;
	border-radius: 37px;

	background-image: url(${(props) =>
		props.countClasses < 2
			? './images/overlays/backOverlay.png'
			: './images/overlays/backOverlayHybrid.png'});
	background-size: 100% 100%;
	background-repeat: no-repeat;
`

export const CardBackClassIconWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 28px;
`

export const TooltipLink = styled.a`
	cursor: pointer;
`
