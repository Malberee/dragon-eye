import CardList from './CardList'
import dragons from '../data/dragons.json'
import './App.scss'

function App() {
	return <CardList dragons={dragons} />
}

export default App
