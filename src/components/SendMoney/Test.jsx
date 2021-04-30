import React, { useState } from 'react'

import './test.css'

function Test() {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState('')

  const handleChange=text=>{
    setValue(text)
  
    if (text !== '') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  return (
    <div id="float-label">
      <input type="email" value={value} onChange={e=>handleChange(e.target.value)} />

      <label htmlFor="email" className={isActive ? 'active' : ''}>
        E-mail
      </label>
  </div>
  )
}

export default Test
