import React from 'react'
import { Provider } from 'react-redux'

import './App.css'
import AppRoot from './AppRoot'
import store from './redux/store'

import Test from './components/test/Test'

function App() {
	return (
		<div className="">
			<Provider store={store}>
				<AppRoot />
				{/* <Test /> */}
			</Provider>
		</div>
	)
}

export default App
