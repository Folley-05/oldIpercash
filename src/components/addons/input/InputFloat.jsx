import React, { useState } from 'react'

import './inputfloat.css'

function InputFloat({label, placeholder, name, required, theme, change}) {
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
		<div className={`float-label ${theme}`}>
			<input type="text" value={value}
				name={name} 
				onChange={e=>handleChange(e.target)} 
				placeholder={isActive && place ? placeholder : ''} 
				required={required}
			/>

			<label htmlFor="email" className={isActive ? 'active' : ''}>
				{label}
			</label>
		</div>
	)
}

export default InputFloat
