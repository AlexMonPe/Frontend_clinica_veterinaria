import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuario from "./contenedores/RegisttroUsuario/RegistroUsuario.js";
import ListadoUsuario from "./contenedores/ListadoUsuario/ListadoUsuario.js";
import RegistroMascota from "./contenedores/RegistroMascota/RegistroMascota.js";
import ListadoMascota from "./contenedores/ListadoMascota/ListadoMascota";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistroUsuario />}></Route>
          <Route path="/registroMascota" element={<RegistroMascota />}></Route>
          <Route path="/listado" element={<ListadoUsuario />}></Route>
          <Route path="/listadoMascota" element={<ListadoMascota />}></Route>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
