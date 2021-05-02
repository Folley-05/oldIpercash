import React from 'react'

import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import SendMoney from './components/sendMoney/SendMoney.jsx'
import BuyCrypto from './components/buyCrypto/BuyCrypto'
import SellCrypto from './components/sellCrypto/SellCrypto'

import Test from './components/test/Test'

function App() {
	return (
		<div className="container">
			<Header />
			<Home />
			{/* <SendMoney /> */}
			{/* <SellCrypto /> */}
			{/* <BuyCrypto /> */}
			{/* <Test /> */}
			<Footer />
		</div>
	)
}

export default App
