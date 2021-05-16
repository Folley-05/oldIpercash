import React from 'react'

import Navigator from './navigation/Navigator'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

import Test from './components/test/Test'

function AppRoot() {
    return (
		<div className="container">
			{/* <Header /> */}
			<Navigator />
			{/* <Test /> */}
			{/* <Footer /> */}
		</div>
    )
}

export default AppRoot
