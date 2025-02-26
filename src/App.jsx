import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div id="main">
      <div id='preguntaContainer'>
        <h1></h1>
      </div>

      <div id='botonesContainer'>
        <button type='button' className='respBtn btn btn-light'></button>
        <button type='button' className='respBtn btn btn-light'></button>
        <button type='button' className='respBtn btn btn-light'></button>
        <button type='button' className='respBtn btn btn-light'></button>
      </div>

      <div id='infoBtnContainer' className='btn-group'>
        <button disabled className='infoBtn'>num_preguntas</button>
        <button disabled className='infoBtn'>puntos</button>
      </div>
    </div>
  )
}

export default App
