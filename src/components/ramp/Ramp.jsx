import React from 'react'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'

const ramp=new RampInstantSDK({
    hostAppName : 'Ipercash' , 
    hostLogoUrl : 'https://ipercash.fr/assets/logo-ipercash.jpeg',
    swapAsset: 'BCH',
    fiatCurrency: 'EUR',
    fiatValue: 15,
    userAddress: 'qpv6j55d02e0dyh2x08t0vgrpurkkjzupqhxzlzxsq',
  }).show(); 

function Ramp() {
    console.log(ramp);
    return (
        <div className="ramp">
            
        </div>
    )
}

export default Ramp
