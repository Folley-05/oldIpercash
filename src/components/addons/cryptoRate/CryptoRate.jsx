import React from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import {IoSwapHorizontal} from 'react-icons/io5'

import './crypto-rate.css'

import btc from './assets/btc.png'
import eu from './assets/eu.png'
import xaf from './assets/xaf.jpeg'

function CryptoRate({crypto, rate}) {
    return (
        <div className="crypto-rate">
            <h3>Crypto Rate</h3>
            <span><img srcSet={btc} alt=""/> <AiOutlineSwap style={{verticalAlign: 'middle'}}  size={30} /> {rate*655} <img srcSet={xaf} alt=""/> <AiOutlineSwap style={{verticalAlign: 'middle'}} size={30}  /> {rate} <img srcSet={eu} alt=""/></span>
        </div>
    )
}

export default CryptoRate
