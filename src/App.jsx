import { useState } from 'react'

import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {

  const [pacientes, setPacientes] = useState([])

  const tomaUnValor = (valor) => {
      console.log(valor);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header 
        tomaUnValor={tomaUnValor}
      />

      <div className='mt-12 md:flex'>
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
