import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { ModalOverlay } from './Modal.styled'
import CardModal from '../CardModal'

const modalRoot = document.getElementById('modal-root')

const Modal = ({ dragon, toggleModal }) => {
	const childRef = useRef(null)

	let screenWidth = window.innerWidth

	const handleClick = () => {
		childRef.current.isFlipped(false)
		setTimeout(() => {
			toggleModal()
		}, 300)
	}

	return createPortal(
		<ModalOverlay
			onClick={handleClick}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
		>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				layoutId={dragon.name}
				animate={{ scale: [null, null, null, screenWidth > 720 ? 1.5 : 1.1] }}
			>
				<CardModal dragon={dragon} ref={childRef} />
			</motion.div>
		</ModalOverlay>,
		modalRoot,
	)
}

export default Modal
