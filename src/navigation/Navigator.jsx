import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../components/home/Home'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SendMoney from '../components/sendMoney/SendMoney'
import BuyCrypto from '../components/buyCrypto/BuyCrypto'
import SellCrypto from '../components/sellCrypto/SellCrypto'

function Navigator() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/sendmoney" component={SendMoney} />
                <Route path="/buycrypto" component={BuyCrypto} />
                <Route path="/sellcrypto" component={SellCrypto} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Navigator
