import styled from 'styled-components'

export const CardOutline = styled.div`
	border-radius: 41px;
	padding: 20px;

	background-image: url(${(props) =>
		`../../src/assets/overlays/${props.classes}.png`});
	background-size: cover;
	background-repeat: no-repeat;
`

export const CardWrapper = styled.div`
	width: 518px;
	height: 718px;
	padding: 20px 18px 17px 19px;
	border-radius: 68px;

	background-image: url('./src/assets/overlays/overlay.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
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
	font-size: 26px;
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
