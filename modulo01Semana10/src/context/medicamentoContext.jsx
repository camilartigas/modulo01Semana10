import { createContext } from "react";

export const MedicamentosContext = createContext()

export const MedicamentosContextProvider = ({children}) => {

    const [listaMedicamentos, setListaMedicamentos] = useState([])

    const AdicionarMedicamento = (nome, laboratorio, preco) =>{
        if(nome.length === "" || laboratorio.length === "" || preco.length === 0){
            alert("Preencha todos os campos")
            return
        }
        const novoMedicamento = {
            id: listaMedicamentos.length + 1,
            nome: nome,
            laboratorio: laboratorio,
            preco: preco,
            favorito: false
    }

    const novaLista = [...listaMedicamentos, novoMedicamento]
    console.log(novaLista)
    setListaMedicamentos(novaLista)
    alert("Medicamento adicionado com sucesso")

    return (
        <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamento}}>
            {children}
        </MedicamentosContext.Provider >
     )
}
}