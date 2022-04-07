import "./ModificarCita.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ModificarCita = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navegar = useNavigate();
  const [cita, setCita] = useState({});

const getCitas = async () => {
    const citasRes = await fetch(
      "https://veterinaria-back.herokuapp.com/citas/lista?idMascota=" +
      params.id,
      {
        method: "GET",
      }
    );
    const citaData = await citasRes.json();

    setCita(citaData);
    console.log(citaData, " dataaaaaaaaa");
  };
  useEffect(() => {
    try {
      getCitas();
    } catch (error) {
      console.log(error);
    }
  }, []);

const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        descripcion: e.target[0].value,
        fechaDeVisita: e.target[1].value,
      };

const patchCita = await fetch(
  "https://veterinaria-back.herokuapp.com/citas/" + params.id,
        {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (patchCita) {
        navegar("/areaCliente");
        dispatch({
          type: "VER_POPUP",
          payload: "Has modificado a " + e.target[0].value,
        });
        setTimeout(() => dispatch({ type: "CERRAR_POPUP" }), 3000);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
  return (
    <div className="modificarCita" >
      <h1>Modifica los datos de tu cita que deseas actualizar</h1>
      <form className="formulario" onSubmit={(e) => formSubmit(e)}>
        <label className="labelModificarCita" htmlfor="descripcion">Introduzca la descripcion </label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          defaultValue={cita.descripcion}
        />
        <label className="labelModificarCita" htmlfor="fechaDeVisita">Introduzca la fechaDeVisita </label>
        <input 
         className="fecha"
         type="datetime-local"
         id="fechaDeVisita"
         name="fechaDeVisita"
         placeholder="aaaa-mm-dd hh:mm:ss"
         defaultValue={cita.fechaDeVisita}
         />
        <input type="submit" value="SEND" className="sendButton" />
      </form>
    </div>
  );
};

export default ModificarCita;

