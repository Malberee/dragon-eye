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
		setModalIsOpen(!modalIsOpen)
	}

	console.log(
		dragons.filter((dragon) => dragon.name.toLowerCase().includes(query))
	)

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
				/>
			</Container>
			{modalIsOpen && <Modal dragon={dragon} toggleModal={toggleModal} />}
		</>
	)
}

export default App
