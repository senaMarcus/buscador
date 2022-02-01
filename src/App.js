
import {useState} from "react"

import {FiSearch} from "react-icons/fi"
import './styles.css'

import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({}) //estado que recebe RESPONSE.DATA (dados da api)

  async function handleSearch() {
    if (input === '') {
      alert ("Preencha o CEP!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data) //objeto de retorno com dados da API
      setInput("")

    } catch {
      alert("Ops... Algo de errado não está certo! Certeza que estamos no mesmo planeta?  ")
      setInput("") // depois do alerta, ele limpa o campo do input novamente
    }
  }


  return (
    <div className="container">
     <h1 className="title">Buscador de CEP</h1>
     <div className="containerInput">

       <input type="text"
       placeholder="Digite o CEP..." 
       value={input} //atrelado ao que for inserido no input
       onChange={(e) => setInput(e.target.value)} //guarndando o valor do input
       />

       <button className="btnSearch" onClick={handleSearch}>
         <FiSearch size={25} color="#fff"/>
       </button>

     </div>

     <main className="main">
       <h2>Cep: {cep.cep}</h2>

       <span>{cep.logradouro}</span>
       <span>Complemento: {cep.complemento}</span>
       <span>{cep.bairro}</span>
       <span>{cep.localidade} -{cep.uf}</span>
     </main>
    </div>
  );
}

export default App;
