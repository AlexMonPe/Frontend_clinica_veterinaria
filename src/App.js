import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoUsuario from "./contenedores/EjemploListado/ejemploListado.js";

import CrearUsuario from "./contenedores/CrearUsuario/CrearUsuario.js";
import LoginUsuario from "./contenedores/LoginUsuario/LoginUsuario.js";
import Home from "./componentes/Home/Home.js";
<<<<<<< HEAD
import RegistroMascota from "./contenedores/RegistroMascota/RegistroMascota.js"
=======
import VistaCliente from "./contenedores/VistaCliente/VistaCliente";
import InfoMascotas from "./contenedores/InfoMascotas/InfoMascotas";
import CrearCita from "./contenedores/CrearCita/CrearCita.js";
>>>>>>> 75dbbbb83043d328e1462ccc752d6974343a1c7e

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginUsuario />}></Route>
<<<<<<< HEAD
          <Route path="/registroMascota" element={<RegistroMascota />}></Route>
=======
          <Route path="/registro" element={<CrearUsuario />}></Route>
          <Route path="/listado" element={<ListadoUsuario />}></Route>
          <Route path="/areaCliente" element={<VistaCliente />}></Route>
          <Route path="/mascotas" element={<InfoMascotas />}></Route>
          <Route path="/crearCita" element={<CrearCita />}></Route>
>>>>>>> 75dbbbb83043d328e1462ccc752d6974343a1c7e
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
