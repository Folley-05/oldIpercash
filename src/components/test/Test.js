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
  const test=()=>{
    let data=new FormData()
    //data.append('tel1','123456789')
    let requestOptions={
      method: 'POST',
      body: data,
      //mode: 'no-cors'
      // headers: {
      //   'Accept': 'application/json',
      // },
    }
    fetch("https://risene-api.herokuapp.com/api/updateentreprise/8", requestOptions)
    .then(response=>response.json())
    .then(res=>console.log(res))
    .catch(err=>console.log("erreur", err))
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
      <br/>
      <button onClick={test}>test</button>
    </>
  )
}

export default Test

//action="http://127.0.0.1:8000/api/importregions"