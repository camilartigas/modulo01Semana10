import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MedicamentosContextProvider } from './context/medicamentoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MedicamentosContextProvider>
    <App />
  </MedicamentosContextProvider>
  
  
)
