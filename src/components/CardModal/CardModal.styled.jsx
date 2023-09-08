import styled from 'styled-components'

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

	transform: scaleX(-1);
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
	display: block;
	cursor: pointer;

	&:has(.sticker) {
		position: absolute;
		right: 10px;
		bottom: 15px;

		width: 50px;
		height: 30px;

		transform: rotate(-10deg);
	}
`
