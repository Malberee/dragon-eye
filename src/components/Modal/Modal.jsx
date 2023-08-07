import { useState } from 'react'
import { ModalOverlay, ModalWrapper } from './Modal.styled'
import CardModal from '../CardModal'
import { AnimatePresence } from 'framer-motion'

const Modal = ({ isOpen, dragon, toggleModal }) => {
	const [isFlipped, setFlipped] = useState(false)

	const getCardOutline = (classes) => {
		if (classes.length > 1) {
			return `${classes[0]}_${classes[1]}`
		}

		return classes
	}

	const getDragonPicture = (name) => {
		const formattedName = name.split(' ')
		formattedName[0] = formattedName[0].toLowerCase()

		return `./images/images/dragons/${formattedName.join('')}.png`
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<ModalOverlay onClick={toggleModal}>
					<ModalWrapper
						onClick={(e) => e.stopPropagation()}
						initial={{
							scale: 0,
						}}
						animate={{
							scale: 1,
						}}
						exit={{
							scale: 0,
						}}
						transition={{
							duration: 0.1,
						}}
					>
						<CardModal dragon={dragon} />
					</ModalWrapper>
				</ModalOverlay>
			)}
		</AnimatePresence>
	)
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
