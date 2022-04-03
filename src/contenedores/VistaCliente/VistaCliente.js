import "./VistaCliente.css";
import InfoUsuario from "../InfoUsuario/InfoUsuario.js";
import InfoMascotas from "../InfoMascotas/InfoMascotas.js";
import CrearCita from "../CrearCita/CrearCita.js";
import ModificarMascota from "../ModificarMascota/ModificarMascota.js";
import BorrarMascota from "../BorrarMascota/BorrarMascota.js";

const VistaCliente = () => {
  const mascotasCliente = InfoMascotas;
    return (
    <div>
      <div>{InfoUsuario}</div>
      <InfoMascotas />
    </div>
  );
};
export default VistaCliente;
