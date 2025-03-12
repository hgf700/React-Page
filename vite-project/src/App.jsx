import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="container-app">
      <div className="goral">
        <h1>strona</h1>
      </div>
      <div className="gorap">
        <h1 className="przyciski">home</h1>
        <h1 className="przyciski">firma</h1>
        <h1 className="przyciski">kontakt</h1>
      </div>
      <div className="content">
        <label>Strona internetowa
        <br/>
        <button type="button" className="przyciski2">
          kliknij mnie
        </button>
        </label>
      </div>
      <div className="kafelki-container">
        <div className="kafelek">
          <h1>1 rzecz</h1>
          <label> tekst</label>
        </div>
        <div className="kafelek">
            <h1>2 rzecz</h1>
            <label> tekst</label>
        </div>
        <div className="kafelek">
            <h1>3 rzecz</h1>
            <label> tekst</label>
        </div>
      </div>
      <div className='upfooter'>
        <label>tytuł nagłówka</label>
      </div>
      <div className='footer'>
        <label className='odstep'>
          Napisz do nas 
          </label>
          <label className='odstep'>
          Mapka dojazdu 
          </label>
          <label className='odstep'>
          Szybki kontakt
          </label>

        
        
      </div>
    </div>
    </>
  )
}

export default App
