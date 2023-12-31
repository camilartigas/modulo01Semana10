import {useState} from 'react';
import { MedicamentosContext } from '../../context/medicamentoContext';

function FormularioNovoMedicamento() {

    const{AdicionarMedicamento} = useContext(MedicamentosContext);

    const [nome, setNome] = useState('');
    const [laboratorio, setLaboratorio] = useState('');
    const [preco, setPreco] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        AdicionarMedicamento(nome, laboratorio, preco);
        setNome('');
        setLaboratorio('');
        setPreco(0);
        
        }

    return (
        <>
        <h1>Formulário de Cadastro de Medicamentos</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Qual o nome do medicamento que você quer cadastrar?'value={nome} onChange={(e)=> setNome(e.target.value)}/>
            <input type="text" placeholder='Qual o nome do Laboratório do medicamento?' value={laboratorio} onChange={(e)=> setLaboratorio(e.target.value)}/>
            <input type="number" placeholder='Qual o preço do medicamento?' value={preco} onChange={(e)=> setPreco(Number(e.target.value))}/>
            <button>Cadastrar novo</button>
        </form>
        </>
        
    )
}

export default FormularioNovoMedicamento;