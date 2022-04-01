import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuario from "./contenedores/RegisttroUsuario/RegistroUsuario.js";
import ListadoUsuario from "./contenedores/ListadoUsuario/ListadoUsuario.js";
import RegistroMascota from "./contenedores/RegistroMascota/RegistroMascota.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistroUsuario />}></Route>
          <Route path="/registro" element={<RegistroMascota />}></Route>
          <Route path="/listado" element={<ListadoUsuario />}></Route>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
