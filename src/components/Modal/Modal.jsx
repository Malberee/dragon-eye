import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { createPortal } from 'react-dom'
import { ModalOverlay } from './Modal.styled'
import CardModal from '../CardModal'

const modalRoot = document.getElementById('modal-root')

const Modal = ({ dragon, toggleModal }) => {
	return createPortal(
		<ModalOverlay onClick={toggleModal}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				layoutId={dragon.name}
				animate={{
					scale: 1.5,
				}}
			>
				<CardModal dragon={dragon} />
			</motion.div>
		</ModalOverlay>,
		modalRoot
	)
}

export default Modal
