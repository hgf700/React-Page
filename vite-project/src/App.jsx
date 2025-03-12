import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <label>Strona internetowa</label>
        <button type="button" className="przyciski2">
          Click me
        </button>
      </div>
      <div className="kafelki-container">
        <div className="kafelek1">
          <h1>1 rzecz</h1>
          <label> tekst</label>
        </div>
        <div className="kafelek">
          <div className="kafelek2">
            <h1>2 rzecz</h1>
            <label> tekst</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
