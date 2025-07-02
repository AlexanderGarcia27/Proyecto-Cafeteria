import { useState } from 'react'
import './App.css'
import {Carrusel} from './components/seccion_3/carrusel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carrusel/>
      
    </>
  )
}

export default App
