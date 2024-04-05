import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  
  function aumentar() {
    if (count2 != 200) {
      setCount2(count2 + 1)
    }
  }
  function Restar() {

    if (count2 != -200) {
      setCount2(count2 - 1)

    }
  }
  function Mas8() {
    if (count2 != 200) {
      setCount2(count2 + 8)
    }
  }

  function Menos8() {
    if (count2 != -200) {
      setCount2(count2 - 8)
    }
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <h3>
          <p>
            {count2}
          </p>
        </h3>
        <button onClick={Mas8} className='Validacion'>Aumenta +8 </button>
        <button onClick={aumentar}>Aunmentar</button>

        <button onClick={Restar}>Restar</button>
        <button onClick={Menos8}>Restar -8</button>


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
