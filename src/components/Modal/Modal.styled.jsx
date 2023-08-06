import styled from 'styled-components'

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	height: 100vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #00000060;

	@media screen and (max-width: 720px) {
		transform: scale(1.1);
	}

	transform: scale(1.5);
`

export const ModalWrapper = styled.div``
