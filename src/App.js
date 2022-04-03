import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoUsuario from "./contenedores/EjemploListado/ejemploListado.js";
import RegistroCita from "./contenedores/CrearCita/CrearCita.js";
import CrearUsuario from "./contenedores/CrearUsuario/CrearUsuario.js";
import LoginUsuario from "./contenedores/LoginUsuario/LoginUsuario.js";
import Home from "./componentes/Home/Home.js";
import VistaCliente from "./contenedores/VistaCliente/VistaCliente";
import InfoMascotas from "./contenedores/InfoMascotas/InfoMascotas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/listado" element={<ListadoUsuario />}></Route>
          <Route path="/registroCita" element={<RegistroCita />}></Route>
          <Route path="/registro" element={<CrearUsuario />}></Route>
          <Route path="/login" element={<LoginUsuario />}></Route>
          <Route path="/areaCliente" element={<VistaCliente />}></Route>
          <Route path="/mascotas" element={<InfoMascotas />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
