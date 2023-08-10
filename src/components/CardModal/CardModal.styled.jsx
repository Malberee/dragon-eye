import styled from 'styled-components'
import { IconsWrapper } from '../ClassIconsMini/ClassIconsMini.styled'

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

export const CardBackIconsWrapper = styled.div`
	${IconsWrapper} {
		position: absolute;

		filter: saturate(0) brightness(0);
		opacity: 30%;
		transform: scaleX(-1);

		:nth-child(1) {
			border-color: green;
			top: 40px;
			left: 40px;
		}
		:nth-child(2) {
			border-color: red;
			top: 40px;
			right: 40px;
		}
		:nth-child(3) {
			border-color: yellow;
			bottom: 40px;
			left: 40px;
		}
		:nth-child(4) {
			border-color: pink;
			bottom: 40px;
			right: 40px;
		}
	}
`

export const TooltipLink = styled.a`
	cursor: pointer;
`
