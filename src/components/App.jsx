import { useState, useEffect } from 'react'
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
import {
  selectDragonsByFilter,
  selectAllDragons,
} from '../redux/dragons/selectors'

import './App.scss'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  const dragons = useSelector(selectDragonsByFilter)
  const { status, error } = useSelector(selectAllDragons)

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

  const filterDragonsByName = () => {
    const filteredDragons = dragons.filter((dragon) =>
      dragon.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .startsWith(query.replace(/\s+/g, '')),
    )

    return filteredDragons
  }

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
            <CardList
              dragons={filterDragonsByName()}
              toggleModal={toggleModal}
            />
          )}
        </Container>
        <AnimatePresence>
          {modalIsOpen && <Modal toggleModal={toggleModal} />}
        </AnimatePresence>
      </main>
    </Layout>
  )
}

export default App
