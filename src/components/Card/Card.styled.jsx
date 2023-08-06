import styled from 'styled-components'
import { IconsWrapper } from '../ClassIconsMini/ClassIconsMini.styled'

export const CardLink = styled.a`
	cursor: pointer;

	:hover {
		transform: scale(1.02);
	}

	transition: transform cubic-bezier(0.17, 0.67, 0.83, 0.67) 150ms;
`

export const CardOutline = styled.div`
	display: inline-block;
	border-radius: 41px;
	padding: 13px;

	background-image: url(${(props) =>
		`./src/images/overlays/${props.classes}.png`});
	background-color: #d7ae73;
	background-size: 100% 100%;
	background-repeat: no-repeat;
`

export const CardWrapper = styled.div`
	width: 301px;
	height: 418px;
	padding: 10px 8px 7px 9px;
	border-radius: 37px;

	background-image: url('./src/images/overlays/overlay.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
`

export const CardBackWrapper = styled.div`
	position: relative;

	width: 301px;
	height: 418px;
	border-radius: 37px;

	background-image: url('./src/images/overlays/backside_overlay.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;
	align-items: center;
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

export const CardHeader = styled.div`
	width: 100%;
	height: 42px;
	padding: 0px 4px;
	margin-bottom: 8px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const DragonName = styled.h2`
	padding: 5px;

	font-size: 24px;
	text-align: center;
`

export const DragonPicture = styled.img`
	width: 100%;
	padding: 7.5px 0px;
`

export const CardInner = styled.div`
	height: 39px;
	padding: 10px 0;

	display: flex;
	align-items: center;
	gap: 10px;
`

export const Salvo = styled.div`
	width: 100%;
	padding: 0px 2px;

	display: flex;
	align-items: center;
	gap: 8px;
`

export const SalvoIcon = styled.img`
	width: 10px;
	margin-left: 2px;
`

export const SalvoType = styled.p`
	font-size: 12px;
`

export const Abilities = styled.div`
	width: 100%;
	padding: 0px 2px;

	display: flex;
	align-items: center;
	gap: 2px;
`

export const DragonDescription = styled.p`
	max-height: 100px;
	padding: 4px;
	border-radius: 0 0 27px 27px;

	font-size: 14px;
`

export const TooltipLink = styled.a`
	cursor: pointer;
`
