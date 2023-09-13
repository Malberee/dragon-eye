import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'
import store from './store'

import { setFavicon } from './utils/setFavicon'
setFavicon('🐲')

console.log(
	`%c                                 
 _____     _ _                   
|     |___| | |_ ___ ___ ___ ___ 
| | | | .'| | . | -_|  _| -_| -_|
|_|_|_|__,|_|___|___|_| |___|___|
                                
`,
	'background: #222; color: #bada55',
)
console.log('%c Thanks to Statikin ❤️', 'background: #222; color: #bada55')

import App from './components/App'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<NextUIProvider>
				<App />
			</NextUIProvider>
		</Provider>
	</React.StrictMode>,
)
