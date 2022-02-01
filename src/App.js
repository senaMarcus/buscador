
import {FiSearch} from "react-icons/fi"
function App() {
  return (
    <div className="container">
     <h1 className="title">Buscador de CEP</h1>
     <div className="containerInput">
       <input type="text"
       placeholder="Digite o CEP..." />
       <button className="btnSearch">
         <FiSearch/>
       </button>
     </div>
    </div>
  );
}

export default App;
