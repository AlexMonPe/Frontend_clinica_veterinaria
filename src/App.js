import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoUsuario from "./contenedores/ListadoUsuario/ListadoUsuario.js";
import RegistroCita from "./contenedores/RegistroCitas/RegistroCitas.js";
import CrearUsuario from "./contenedores/CrearUsuario/CrearUsuario.js";
import LoginUsuario from "./contenedores/LoginUsuario/LoginUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistroCita />}></Route>
          <Route path="/listado" element={<ListadoUsuario />}></Route>
          <Route path="/registroCita" element={<RegistroCita />}></Route>
          <Route path="/registro" element={<CrearUsuario />}></Route>
          <Route path="/login" element={<LoginUsuario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
