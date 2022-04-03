import "./InfoMascotas.css";
import { useEffect, useState } from "react";
import CrearCita from "../CrearCita/CrearCita";
import ModificarMascota from "../ModificarMascota/ModificarMascota";
import BorrarMascota from "../BorrarMascota/BorrarMascota";
import { useNavigate } from "react-router-dom";

const InfoMascotas = () => {
  
  const navegar = useNavigate();
  const [mascotas, setMascotas] = useState([]);

  const getMascotas = async () => {
    
    const mascotasRes = await fetch(
      "https://veterinaria-back.herokuapp.com/mascotas?idUsuario=" +
        localStorage.getItem("id"),
      {
        method: "GET",
      }
    );
    const mascotasData = await mascotasRes.json();

    setMascotas(mascotasData);
  };
  useEffect(() => {
    try {
      getMascotas();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(mascotas, "estas son las mascotas");
  return (
    <div className="mascotasCard">
      {mascotas.map((mascota) => {
        return (
          <div className="infoMascotas">
            <h3>Datos de {mascota.nombre_mascota}</h3>
            <tr>
              <th>Nombre de la mascota</th>
              <td>{mascota.nombre_mascota}</td>
              <th>Peso</th>
              <td>{mascota.peso}</td>
              <th>Fecha de nacimiento</th>
              <td>{mascota.fecha_nacimiento}</td>
              <th>Doctor</th>
              <td>{mascota.doctor}</td>
            </tr>
            <div className="botonesOpciones">
              <button
                type="button"
                className="botonOpcionesMascotas"
                onClick=""
              >
                Pedir cita
              </button>
              <button
                type="button"
                className="botonOpcionesMascotas"
                onClick=""
              >
                Modificar datos de mascota
              </button>
              <button
                type="button"
                className="botonOpcionesMascotas"
                onClick=""
              >
                Eliminar mascota
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoMascotas;
