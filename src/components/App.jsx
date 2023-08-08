import { useState } from 'react'
import Header from './Header'
import Container from './Container'
import Modal from './Modal'
import CardList from './CardList'
import dragons from '../data/dragons.json'
import './App.scss'

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [dragon, setDragon] = useState(null)
	const [query, setQuery] = useState('')

	const toggleModal = () => {
		if (modalIsOpen) {
			setModalIsOpen(false)
			document.body.style.overflow = 'unset'
		}
		if (!modalIsOpen) {
			setModalIsOpen(true)
			document.body.style.overflow = 'hidden'
		}
	}

	return (
		<>
			<Header setQuery={setQuery} />
			<Container>
				<CardList
					dragons={dragons.filter((dragon) =>
						dragon.name.toLowerCase().includes(query)
					)}
					toggleModal={toggleModal}
					setDragon={setDragon}
					modalIsOpen={modalIsOpen}
					dragon={dragon}
				/>
			</Container>
			{modalIsOpen && (
				<Modal isOpen={modalIsOpen} dragon={dragon} toggleModal={toggleModal} />
			)}
		</>
	)
}

export default App
