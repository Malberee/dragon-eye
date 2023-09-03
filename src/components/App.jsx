import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

import Authors from './Authors'
import Header from './Header'
import Container from './Container'
import Modal from './Modal'
import CardList from './CardList'
import Filters from './Filters'

import { selectDragonsByFilter } from '../store/selectors'

import './App.scss'

function App() {
	const dragons = useSelector(selectDragonsByFilter)

	const [modalIsOpen, setModalIsOpen] = useState(false)
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
			<Authors />
			<Header setQuery={setQuery} />
			<Filters />
			<Container>
				<CardList
					dragons={dragons.filter((dragon) =>
						dragon.name.toLowerCase().includes(query),
					)}
					toggleModal={toggleModal}
				/>
			</Container>
			<AnimatePresence>
				{modalIsOpen && <Modal toggleModal={toggleModal} />}
			</AnimatePresence>
		</>
	)
}

export default App
