import React from 'react'

import './App.css'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
	return (
		<div className="container">
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
