import "./TodasCitas.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import { useDispatch } from "react-redux";
import { CERRAR_POPUP, VER_POPUP } from "../../store/types";

const TodasCitas = () => {
  const dispatch = useDispatch();
  const navegar = useNavigate();

  const [citas, setCitas] = useState([]);
  const getCitas = async () => {
    const citasRes = await fetch(
      "https://veterinaria-back.herokuapp.com/citas/allcitas",
      {
        method: "GET",
      }
    );
    const datosCitas = await citasRes.json();
    setCitas(datosCitas);
    console.log(datosCitas, " Estas son todas las citas!!!!!!!!");
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
        body: JSON.stringify({ estado: "cancelada" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      getCitas();
      dispatch(actionCreator(VER_POPUP, "Has cancelado la cita"));
      setTimeout(() => dispatch(actionCreator(CERRAR_POPUP)), 3000);
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
  console.log(citas + "Estas si son todas las citas no me jodas!!!!");
  return (
    <div>
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
              <th>Mascota</th>
              <td>{cita.idMascota}</td>
            </tr>
            <div className="botonesOpcionesCitas">
              <button
                type="button"
                className="botonCitas"
                onClick={() => navegar("/modificarCita/" + cita.id)}
              >
                Modificar cita
              </button>
              <button
                type="button"
                className="botonCitas"
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

export default TodasCitas;
