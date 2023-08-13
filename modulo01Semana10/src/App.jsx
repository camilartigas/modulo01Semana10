import { useState } from 'react'
import './App.css'
import { MedicamentosContext } from './context/medicamentoContext'
import Header from './components/header'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'
import CardMedicamento from './components/CardMedicamento'
import { useContext } from 'react'

function App() {

  const {listaMedicamentos} = useContext(MedicamentosContext)
  
  return (
    <>
  <h1>camila</h1>
       
    
    </>
  )
}

export default App
