import styled, { css } from 'styled-components'

export const RarityStickerWrapper = styled.div`
	${(props) =>
		!props.withLink &&
		css`
			position: absolute;
			right: 10px;
			bottom: 15px;
			transform: rotate(-10deg);
		`}

	width: 50px;
	height: 30px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-image: url('./images/overlays/sticker.png');
	background-size: cover;
	box-shadow: 3px 3px 10px -7px rgba(0, 0, 0, 0.75);
`
