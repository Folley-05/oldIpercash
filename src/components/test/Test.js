import React, { useState } from 'react'
import axios from 'axios'

import "./test.css"

function Test() {
  const [state, setstate] = useState({selected: null})
  const handleSelect=e=>{
    setstate({selected: e.target.files[0]})
  }
  const send=()=>{
    let form=new FormData()
    form.append('file', state.selected, state.selected.name)
    axios.post('http://127.0.0.1:8000/api/importarrondissements', form).then(response=>console.log(response)).catch(err=>console.log(`err : `, err))
  }
  console.log(state)
  return (
    <>
      <h1>Test d'un formulaire</h1>
      <div>
        <label htmlFor="file">selectionner le fichier</label>
        <input type='file' id='file' name='file' onChange={handleSelect} /> <br/>
        <button onClick={send}>envoyer</button>
      </div>
    </>
  )
}

export default Test

//action="http://127.0.0.1:8000/api/importregions"