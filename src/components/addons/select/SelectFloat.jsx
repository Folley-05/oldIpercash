import React, { useState } from 'react'

import './selectfloat.css'

function SelectFloat({label}) {
	const [isActive, setIsActive] = useState(false)
	const [value, setValue] = useState('')
	let place=false

  	const handleChange=text=>{
		setValue(text)
		if (text !== '') {
			setIsActive(true)
				place=true
			} 
			else {
				setIsActive(false)
				place=false
		}
  	}

    return (
		<div id="float-select">
            <select name="" id="payment" onChange={e=>handleChange(e.target.value)}>
                <option value="" style={{height: 1}}></option>
                <option value="mobile">Mobile</option>
            </select>

			<label htmlFor="email" className={isActive ? 'active' : ''}>
				{label}
			</label>
		</div>
    )
}

export default SelectFloat
