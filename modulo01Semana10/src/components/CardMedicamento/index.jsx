function CardMedicamento(medicamento){
    return(
        <div>
            <h4>
                <h4>Favorito: {medicamento.favorito.toString()}</h4>
                <img src="/modulo01Semana10/img/IMG_4013.PNG" alt="medicamento"/>
                <h4>Medicamento: {medicamento.nome}</h4>
                <h4>Laboratório: {medicamento.laboratorio}</h4>
                <h4>Preço: R${medicamento.preco}</h4>
            </h4>
        </div>
    )
}

export default CardMedicamento;