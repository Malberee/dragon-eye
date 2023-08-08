import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 4;

	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #00000060;

	/* transform: scale(1.5);

	@media screen and (max-width: 720px) {
		transform: scale(1.1);
	} */
`

export const ModalWrapper = styled(motion.div)`
	/* transform: scale(1.5); */
`
