import React from 'react'

import "./test.css"

function Test() {

  const handleSubmit=e=>{
    e.preventDefault()
    let formData=new FormData(e.target)
    //formData.append('file', 'Hello')
    let requestOptions={
      method: 'POST',
      body: formData,
      //mode: 'no-cors'
      headers: {
        'Accept': 'application/json',
      },
    }
    fetch("http://127.0.0.1:8000/api/importregions", requestOptions)
    .then(response=>response.json())
    .then(res=>console.log(res))
    .catch(err=>console.log("erreur", err))
    return false

  }
  return (
    <>
      <h1>Hello Word</h1>
      <form onSubmit={e=>handleSubmit(e)} encType="multipart/form-data" >
        <label htmlFor="file">fichier</label>
        <input type="file" name="file" id="file"/>
        <br/>
        <button type="submit">Envoyer</button>
      </form>
    </>
  )
}

export default Test

//action="http://127.0.0.1:8000/api/importregions"