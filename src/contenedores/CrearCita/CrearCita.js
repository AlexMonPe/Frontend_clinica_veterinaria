import "./CrearCita.css";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InfoMascotas from "../InfoMascotas/InfoMascotas";
import actionCreator from "../../store/actionTypes";

const CrearCita = () => {
  const dispatch = useDispatch()
  const navegar = useNavigate();
  const dispatch = useDispatch();
  const [mascotas, setMascotas] = useState([]);

  //-------------------------- prueba select mascotas por id en localstorage
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

  //--------------------------------

  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        descripcion: e.target[0].value,
        fechaDeVisita: e.target[1].value,
        idMascota: e.target[2].value,
      };

      const postCita = await fetch(
        "https://veterinaria-back.herokuapp.com/citas",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const obtenerMascota = await fetch(
        "https://veterinaria-back.herokuapp.com/mascotas/" + formData.idMascota,
        {
          method: "GET",
        }
      );
      const infoMascota = await obtenerMascota.json();
      //console.log(infoMascota + "Este es el objeto de la mascota");
      console.log("Form Sumbmit works", postCita);

      if (postCita) {
<<<<<<< HEAD
        dispatch({
          type: "VER_POPUP",
          payload: "Has pedido cita correctamente",
        });
        setTimeout(() => dispatch({ type: "CERRAR_POPUP" }), 3000);
=======
        dispatch(actionCreator("VER_POPUP", "Has creado la cita para " + infoMascota.nombre_mascota));
        setTimeout(()=>dispatch(actionCreator("CERRAR_POPUP")), 3000)
>>>>>>> 243b86b0d4a66bb373c2b77c57d94b9cd51a5338
        navegar("/areaCliente");
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
  return (
    <div className="crearCita">
      <h2>Cita para mascota</h2>
      <form onSubmit={(e) => formSubmit(e)} className="formCrearCita">
        <label className="labelCrearCita" for="descripcion">
          Descripción de la visita
        </label>
        <input
          className="inputCrearCita"
          type="text"
          id="descripcion"
          name="descripcion"
        />
        <label className="labelCrearCita" for="fechaDeVisita">
          Fecha en la que desea la visita
        </label>
        <input
          className="fecha"
          type="datetime-local"
          id="fechaDeVisita"
          name="fechaDeVisita"
          placeholder="aaaa-mm-dd hh:mm:ss"
        />
        <label className="labelCrearCita" for="seleccionar">
          Selecciona la Mascota
        </label>
        <select className="selectMascotas">
          {mascotas.map((mascota) => (
            <option value={mascota.id}>{mascota.nombre_mascota}</option>
          ))}
        </select>
        <input type="submit" value="Pedir cita" className="botonCrearCita" />
      </form>
    </div>
  );
};

export default CrearCita;
