import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import { CERRAR_POPUP, VER_POPUP } from "../../store/types";
import "./InfoCitas.css";
import { useNavigate } from "react-router-dom";


const InfoCitas = () => {
  const navegar = useNavigate();
  const dispatch = useDispatch()
  const [citas, setCitas] = useState([]);
  const params = useParams();

  const getCitas = async () => {
    const citasRes = await fetch(
      "https://veterinaria-back.herokuapp.com/citas/lista?idMascota=" +
        params.id,
      {
        method: "GET",
      }
    );
    const citasData = await citasRes.json();
    setCitas(citasData);
  };
  useEffect(() => {
    try {
      getCitas();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const cancelarCita = async (id) => {
    try {
      await fetch("https://veterinaria-back.herokuapp.com/citas/" + id, {
        method: "PATCH",
        body: JSON.stringify({estado: "cancelada" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      getCitas();
      dispatch(actionCreator(VER_POPUP, "Has cancelado la cita"));
      setTimeout(()=>dispatch(actionCreator(CERRAR_POPUP)), 3000)
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
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
            </tr>
            <div className="botonesOpciones">
              <button
                type="button"
                className="botonOpcionesMascotas"
                onClick={()=> navegar ("/modificarCita/" + cita.id) }
              >
                Modificar cita
              </button>
              <button
                type="button"
                className="botonOpcionesMascotas"
                onClick={() => cancelarCita(cita.id)}
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
