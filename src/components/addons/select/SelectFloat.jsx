import React, { useState } from 'react'

import './selectfloat.css'

function SelectFloat({label, name, change, option}) {
	const [isActive, setIsActive] = useState(false)
	const [value, setValue] = useState('')
	let place=false

  	const handleChange=e=>{
		setValue(e.value)
		if(change) change(e)
		if (e.value !== '') {
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
            <select name={name} id="payment" onChange={e=>handleChange(e.target)}>
                <option value="" style={{height: 1}}></option>
				{ option.map((opt, i)=><option key={`opt${i}`} value={opt.value} >{opt.label}</option>) }
            </select>

			<label htmlFor="email" className={isActive ? 'active' : ''}>
				{label}
			</label>
		</div>
    )
}

export default SelectFloat
