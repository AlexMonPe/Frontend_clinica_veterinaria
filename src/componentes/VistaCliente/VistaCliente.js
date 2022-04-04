import "./VistaCliente.css";
import InfoUsuario from "../../contenedores/InfoUsuario/InfoUsuario.js";
import InfoMascotas from "../../contenedores/InfoMascotas/InfoMascotas.js";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

//Mostrar la información de las mascotas de cada cliente y la información del usuario, y poder modificar cualquier item.
const VistaCliente = () => {
  return (
    <div className="areaCliente">
      <h2>Area de Cliente</h2>
      <h3>Información personal</h3>
      <div>
        <InfoUsuario />
      </div>
      <h3>Tus Mascotas</h3>
      <InfoMascotas />
      <Footer />
    </div>
  );
};
export default VistaCliente;
