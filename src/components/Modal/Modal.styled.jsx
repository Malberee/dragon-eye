import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ModalOverlay = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 12;

	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #00000060;
`