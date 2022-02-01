
import {FiSearch} from "react-icons/fi"
function App() {
  return (
    <div className="container">
     <h1 className="title">Buscador de CEP</h1>
     <div className="containerInput">
       <input type="text"
       placeholder="Digite o CEP..." />
       <button className="btnSearch">
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
