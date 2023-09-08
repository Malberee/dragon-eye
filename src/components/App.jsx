import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

import Layout from './Layout'
import Authors from './Authors'
import Header from './Header'
import Container from './Container'
import Modal from './Modal'
import CardList from './CardList'
import Sidebar from './Sidebar'

import { selectDragonsByFilter } from '../store/selectors'

import './App.scss'

function App() {
	const dragons = useSelector(selectDragonsByFilter)

	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
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

	const toggleSidebar = () => {
		setSidebarIsOpen(!sidebarIsOpen)
	}

	return (
		<Layout>
			<Authors />
			<Header setQuery={setQuery} openSidebar={toggleSidebar} />
			<main>
				<Sidebar isOpen={sidebarIsOpen} closeSidebar={toggleSidebar} />
				<Container>
					<CardList
						dragons={dragons.filter((dragon) =>
							dragon.name
								.toLowerCase()
								.replace(/\s+/g, '')
								.startsWith(query.replace(/\s+/g, '')),
						)}
						toggleModal={toggleModal}
					/>
				</Container>
				<AnimatePresence>
					{modalIsOpen && <Modal toggleModal={toggleModal} />}
				</AnimatePresence>
			</main>
		</Layout>
	)
}

export default App
