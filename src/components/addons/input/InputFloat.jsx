import React, { useState, useEffect } from 'react'

import './inputfloat.css'

function InputFloat({label, placeholder, name, required, theme, change, val}) {
	const [isActive, setIsActive] = useState(false)
	const [value, setValue] = useState(val)
	let place=false

	useEffect(() => {
		if(value || value==0) setIsActive(true)
	}, [])
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
