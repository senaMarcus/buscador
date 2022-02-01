
import {useState} from "react"

import {FiSearch} from "react-icons/fi"
import './styles.css'

function App() {

  function handleSearch() {
    alert ("valor do input " + input)
  }

  const [input, setInput] = useState('')

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
       <h2>Cep: 0000000</h2>
       <span>Rua: Carlos Antonio Giordane</span>
       <span>Complemento: Cardan Sete</span>
       <span>Bairro: Henrique Nery</span>
       <span>Sete lagoas - MG</span>
     </main>
    </div>
  );
}

export default App;
