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
      {mascotasCliente.map((mascota) => {
        return (
          <div>
            <tr>
              <th>Nombre de la mascota</th>
              <th>peso</th>
              <th>Fecha de nacimiento</th>
              <th>Doctor</th>
            </tr>
            <tr>
              <td>{mascota.nombre_mascota}</td>
              <td>{mascota.peso}</td>
              <td>{mascota.fecha_nacimiento}</td>
              <td>{mascota.doctor}</td>
            </tr>
            <button type="button" onClick={CrearCita}>
              Pedir cita
            </button>
            <button type="button" onClick={ModificarMascota}>
              Modificar datos de mascota
            </button>
            <button type="button" onClick={BorrarMascota}>
              Eliminar mascota :(
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default VistaCliente;
