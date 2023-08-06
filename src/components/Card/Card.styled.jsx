import styled from 'styled-components'
import { IconsWrapper } from '../ClassIconsMini/ClassIconsMini.styled'

export const CardOutline = styled.div`
	border-radius: 41px;
	padding: 20px;

	background-image: url(${(props) =>
		`./src/images/overlays/${props.classes}.png`});
	background-color: #902831;
	background-size: cover;
	background-repeat: no-repeat;
`

export const CardWrapper = styled.div`
	width: 518px;
	height: 718px;
	padding: 20px 18px 17px 19px;
	border-radius: 68px;

	background-image: url('./src/images/overlays/overlay.png');
	background-color: #d2a970;
	background-size: 100% 100%;
	background-repeat: no-repeat;
`

export const CardBackWrapper = styled.div`
	position: relative;

	width: 518px;
	height: 718px;
	padding: 20px 18px 17px 19px;
	border-radius: 68px;

	background-image: url('./src/images/overlays/backside_overlay.png');
	background-color: #d2a970;
	background-size: 100% 100%;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const CardBackIconsWrapper = styled.div`
	display: flex;

	${IconsWrapper} {
		position: absolute;

		width: 50px;

		filter: saturate(0) brightness(0);
		opacity: 30%;

		:nth-child(1) {
			border-color: green;
			top: 70px;
			left: 70px;
		}
		:nth-child(2) {
			border-color: red;
			top: 70px;
			right: 70px;
		}
		:nth-child(3) {
			border-color: yellow;
			bottom: 70px;
			left: 70px;
		}
		:nth-child(4) {
			border-color: pink;
			bottom: 70px;
			right: 70px;
		}
	}
`

export const CardHeader = styled.div`
	width: 100%;
	height: 70px;
	padding: 0px 6px;
	margin-bottom: 15px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const DragonName = styled.h2`
	padding: 5px;

	font-size: 34px;
	text-align: center;
`

export const DragonPicture = styled.img`
	width: 100%;
	margin-bottom: 45px;
`

export const CardInner = styled.div`
	height: 35px;
	margin-bottom: 19px;

	display: flex;
	align-items: center;
	gap: 20px;
`

export const Salvo = styled.div`
	width: 100%;
	padding: 0px 5px;

	display: flex;
	align-items: center;
	gap: 16px;
`

export const SalvoIcon = styled.img`
	width: 20px;
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
	height: 100px;
	padding: 5px;

	font-size: 22px;
`
