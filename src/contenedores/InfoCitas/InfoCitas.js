import { useEffect, useState } from "react";
import "./InfoCitas.css";

const InfoCitas = () => {
  const [citas, setCitas] = useState([]);

  const getCitas = async () => {
    const citasRes = await fetch(
      "https://veterinaria-back.herokuapp.com/citas/lista?idUsuario=" +
        localStorage.getItem("id"),
      {
        method: "GET",
      }
    );
    const citasData = await citasRes.json();
      console.log(citasData, 'citasparseadaaaaaaaa')
    setCitas(citasData);
  };
  useEffect(() => {
    try {
      getCitas();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(citas, "estas son las citas");
  return (
    <div className="citasCard">
      {citas.map((cita) => {
        return (
          <div className="infoCitas">
            <h3>Datos de Citas</h3>
            <tr>
              <th>Descripción</th>
              <td>{cita.descripcion}</td>
              <th>Fecha de la cita</th>
              <td>{cita.fechaDeVisita}</td>
              <th>Estado</th>
              <td>{cita.estado}</td>
              <th>idMascota</th>
              <td>{cita.idMascota}</td>
            </tr>
            <div className="botonesOpciones">
              <button
                type="button"
                className="botonOpcionesMascotas"
                onClick=""
              >
                Modificar cita
              </button>
              <button
                type="button"
                className="botonOpcionesMascotas"
                onClick=""
              >
                Cancelar Cita
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCitas;