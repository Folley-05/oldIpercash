import React, { useState } from 'react'

import './inputfloat.css'

function InputFloat({label, placeholder, theme}) {
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
		<div className={`float-label ${theme}`}>
			<input type="text" value={value} onChange={e=>handleChange(e.target.value)} placeholder={isActive && place ? placeholder : ''} />

			<label htmlFor="email" className={isActive ? 'active' : ''}>
				{label}
			</label>
		</div>
	)
}

export default InputFloat
