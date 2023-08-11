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
  <Header />
      <FormularioNovoMedicamento />
      {listaMedicamentos.map(medicamento => (<CardMedicamento key={medicamento.id} medicamento={{nome: 'Dorflex', laboratorio: 'Sanofi', preco:'7,65', favorito:false, id:1}}/>))}
       
    
    </>
  )
}

export default App
