import { useState } from 'react'
import Modal from './Modal'
import CardList from './CardList'
import Card from './Card'
import dragons from '../data/dragons.json'
import './App.scss'

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [dragon, setDragon] = useState(null)

	const toggleModal = () => {
		setModalIsOpen(!modalIsOpen)
	}

	return (
		<>
			<CardList
				dragons={dragons}
				toggleModal={toggleModal}
				setDragon={setDragon}
			/>
			{modalIsOpen && <Modal dragon={dragon} toggleModal={toggleModal} />}
		</>
	)
}

export default App
