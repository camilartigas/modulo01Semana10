import { createContext } from "react";

export const MedicamentosContext = createContext()

export const MedicamentosContextProvider = ({children}) => {

    const [listaMedicamentos, setListaMedicamentos] = useState(JSON.parse(localStorage.getItem("listaMedicamentos")) || [])

    const AdicionarMedicamento = (nome, laboratorio, preco) =>{
        if(nome.length === "" || laboratorio.length === "" || preco === 0 || preco === ""){
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
    localStorage.setItem("listaMedicamentos", JSON.parse(novaLista))
    setListaMedicamentos(novaLista)
    alert("Medicamento adicionado com sucesso")

}

    const FavoritarMedicamento = (id) => {
        const lista = listaMedicamentos.map(item=> {
            if(item.id === id){
                item.favorito = !item.favorito   
            }
            return item
        })

        setListaMedicamentos(lista)
    }

    return (
        <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamento, FavoritarMedicamento}}>
            {children}
        </MedicamentosContext.Provider >
     )
}