import { useState } from 'react'
import './App.css'
import {Carrusel} from './components/seccion_3/carrusel'
import {Contact} from './components/seccion_6/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carrusel/>
      <Contact/>
    </>
  )
}

export default App
