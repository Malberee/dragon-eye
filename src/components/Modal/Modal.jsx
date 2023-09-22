import { useRef } from 'react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

import CardModal from '../CardModal'

import { ModalOverlay } from './Modal.styled'

const modalRoot = document.getElementById('modal-root')

const Modal = ({ closeModal }) => {
  const dragon = useSelector((state) => state.dragons.selectedDragon)

  const childRef = useRef(null)

  let screenWidth = window.innerWidth

  const handleClick = () => {
    if (childRef.current.isFlipped) {
      childRef.current.setIsFlipped(false)
      setTimeout(() => {
        closeModal()
      }, 300)
    } else {
      closeModal()
    }
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
        <CardModal ref={childRef} />
      </motion.div>
    </ModalOverlay>,
    modalRoot,
  )
}

export default Modal
