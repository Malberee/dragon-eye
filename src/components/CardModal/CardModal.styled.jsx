import styled from 'styled-components'
import { IconsWrapper } from '../ClassIconsMini/ClassIconsMini.styled'

export const CardBackWrapper = styled.div`
	position: relative;

	width: 518px;
	height: 718px;
	border-radius: 37px;

	background-image: url('../images/images/overlays/backside_overlay.png');
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
			top: 70px;
			left: 70px;
		}
		:nth-child(2) {
			top: 70px;
			right: 70px;
		}
		:nth-child(3) {
			bottom: 70px;
			left: 70px;
		}
		:nth-child(4) {
			bottom: 70px;
			right: 70px;
		}
	}
`

export const CardOutline = styled.div`
	border-radius: 41px;
	padding: 20px;

	display: inline-block;

	background-image: url(${(props) =>
		`../images/images/overlays/${props.classes}.png`});
	background-color: #d7ae73;
	background-size: 100% 100%;
	background-repeat: no-repeat;

	cursor: pointer;
`

export const CardWrapper = styled.div`
	/* width: 301px;
	height: 418px; */
	padding: 20px 18px 17px 19px;
	border-radius: 63px;

	background-image: url('../images/images/overlays/overlay.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
`

export const CardHeader = styled.div`
	width: 100%;
	height: 69px;
	padding: 0px 4px;
	margin-bottom: 15px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const DragonName = styled.h2`
	padding: 10px;

	font-size: 42px;
	text-align: center;
`

export const DragonPicture = styled.img`
	width: 100%;
	padding: 15px 0px;
`

export const CardInner = styled.div`
	padding: 19px 0;

	display: flex;
	align-items: center;
	gap: 20px;
`

export const Salvo = styled.div`
	width: 100%;
	padding: 0px 5px;

	display: flex;
	align-items: center;
	gap: 8px;
`

export const SalvoIcon = styled.img`
	width: 20px;
	/* margin-right: 2px; */
`

export const SalvoType = styled.p`
	font-size: 24px;
`

export const Abilities = styled.div`
	width: 100%;
	padding: 0px 5px;

	display: flex;
	align-items: center;
	gap: 5px;
`

export const DragonDescription = styled.p`
	max-height: 100px;
	padding: 10px;
	border-radius: 0 0 27px 27px;

	font-size: 28px;
	text-align: center;
`

export const TooltipLink = styled.a`
	cursor: pointer;
`
