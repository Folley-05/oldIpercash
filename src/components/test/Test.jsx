import React, { useState } from 'react'

import './test.css'
import InputFloat from '../addons/input/InputFloat'

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
	  <div className="test">
		  <InputFloat label="champs test" theme="dark" />
	  </div>
  )
}

export default Test
