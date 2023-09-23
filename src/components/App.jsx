import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import Layout from './Layout'
import Authors from './Authors'
import Header from './Header'
import Container from './Container'
import Modal from './Modal'
import CardList from './CardList'
import Sidebar from './Sidebar'
import Loader from './Loader'

import { fetchDragons } from '../redux/dragons/slice'
import { selectAllDragons } from '../redux/dragons/selectors'

import './App.scss'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  const { status, error } = useSelector(selectAllDragons)

  const closeModal = useCallback(() => {
    setModalIsOpen(false)
    document.body.style.overflow = 'unset'
  }, [])

  const openModal = useCallback(() => {
    setModalIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarIsOpen(!sidebarIsOpen)
  }, [sidebarIsOpen])

  useEffect(() => {
    dispatch(fetchDragons())
  }, [dispatch])

  return (
    <Layout>
      <Authors />
      <Header setQuery={setQuery} openSidebar={toggleSidebar} />
      <main className="dark">
        <Sidebar isOpen={sidebarIsOpen} closeSidebar={toggleSidebar} />
        <Container>
          {status === 'loading' ? (
            <Loader />
          ) : error ? (
            <p>{error}</p>
          ) : (
            <CardList query={query} openModal={openModal} />
          )}
        </Container>
        <AnimatePresence>
          {modalIsOpen && <Modal closeModal={closeModal} />}
        </AnimatePresence>
      </main>
    </Layout>
  )
}

export default App
