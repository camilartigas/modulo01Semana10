import { useState } from 'react'
import './App.css'
import Header from './components/header'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'
import { MedicamentosContextProvider } from './context/medicamentoContext'

function App() {
  
  return (
    <>
  <Header />
    <MedicamentosContextProvider>
      
      <FormularioNovoMedicamento />
    </MedicamentosContextProvider>
    </>
  )
}

export default App
