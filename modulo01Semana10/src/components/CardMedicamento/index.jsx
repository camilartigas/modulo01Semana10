import { useContext } from "react";
import { MedicamentosContext } from "../../context/medicamentoContext";

function CardMedicamento({medicamento}){

    const{FavoritarMedicamento} = useContext(MedicamentosContext);
    return(
        <div>
                <button onClick={()=> FavoritarMedicamento(medicamento.id)}>Favorito: {medicamento.favorito.toString()}</button>
                <img width={100} src="/modulo01Semana10/img/IMG_4013.PNG" alt="medicamento"/>
                <h4>Medicamento: {medicamento.nome}</h4>
                <h4>Laboratório: {medicamento.laboratorio}</h4>
                <h4>Preço: R${medicamento.preco}</h4>
        </div>
    )
}

export default CardMedicamento;