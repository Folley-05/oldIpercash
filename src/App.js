import React from 'react'

import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import SendMoney from './components/SendMoney/SendMoney.jsx'

function App() {
	return (
		<div className="container">
			<Header />
			{/* <Home /> */}
			<SendMoney />
			<Footer />
		</div>
	)
}

export default App
