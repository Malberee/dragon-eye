import { useState } from 'react'
import { ModalOverlay } from './Modal.styled'
import CardModal from '../CardModal'

const Modal = ({ dragon, toggleModal }) => {
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

		return `/src/images/dragons/${formattedName.join('')}.png`
	}

	return (
		<ModalOverlay onClick={toggleModal}>
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
					transform: 'scale(1.5)',
				}}
			>
				<CardModal dragon={dragon} />
			</div>
		</ModalOverlay>
	)
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
