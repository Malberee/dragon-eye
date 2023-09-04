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
import Filters from './Filters'

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

	const isDesktop = window.innerWidth >= 768

	console.log(isDesktop)

	console.log(sidebarIsOpen)

	return (
		<Layout>
			<Header setQuery={setQuery} openSidebar={toggleSidebar} />
			<main>
				<AnimatePresence>
					{sidebarIsOpen || isDesktop ? (
						<Sidebar
							isOpen={isDesktop ? false : sidebarIsOpen}
							closeSidebar={toggleSidebar}
						/>
					) : null}
				</AnimatePresence>
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
			</main>
		</Layout>
	)
}

export default App
