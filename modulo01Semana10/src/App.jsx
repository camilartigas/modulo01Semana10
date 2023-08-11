import { useState } from 'react'
import './App.css'
import Header from './components/header'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'
import { MedicamentosContextProvider } from './context/medicamentoContext'
import CardMedicamento from './components/CardMedicamento'

function App() {
  
  return (
    <>
  <Header />
    <MedicamentosContextProvider>
      
      <FormularioNovoMedicamento />
      <CardMedicamento medicamento={{nome: 'Dorflex', laboratorio: 'Sanofi', preco:'7,65', favorito:false, id:1}}/>
    </MedicamentosContextProvider>
    </>
  )
}

export default App
