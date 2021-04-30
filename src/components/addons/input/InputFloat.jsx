import React, { useState } from 'react'

import './inputfloat.css'

function InputFloat({label, placeholder}) {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState('')
  let place=false

  const handleChange=text=>{
    setValue(text)
  
    if (text !== '') {
      setIsActive(true)
      place=true
    } else {
      setIsActive(false)
      place=false
    }
  }

  return (
    <div id="float-label">
      <input type="email" value={value} onChange={e=>handleChange(e.target.value)} placeholder={isActive && place ? placeholder : ''} />

      <label htmlFor="email" className={isActive ? 'active' : ''}>
        {label}
      </label>
  </div>
  )
}

export default InputFloat
