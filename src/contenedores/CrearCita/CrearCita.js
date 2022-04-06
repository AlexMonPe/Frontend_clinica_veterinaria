import "./CrearCita.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InfoMascotas from "../InfoMascotas/InfoMascotas";
import actionCreator from "../../store/actionTypes";
import { CERRAR_POPUP, VER_POPUP } from "../../store/types";

const CrearCita = () => {
  const dispatch = useDispatch();
  const navegar = useNavigate();
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

      if (postCita) {
        dispatch(
          actionCreator(
            VER_POPUP,
            "Has creado la cita para " + infoMascota.nombre_mascota
          )
        );
        setTimeout(() => dispatch(actionCreator(CERRAR_POPUP)), 3000);
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
        <label className="labelCrearCita" htmlFor="descripcion">
          Descripción de la visita
        </label>
        <input
          className="inputCrearCita"
          type="text"
          id="descripcion"
          name="descripcion"
        />
        <label className="labelCrearCita" htmlFor="fechaDeVisita">
          Fecha en la que desea la visita
        </label>
        <input
          className="fecha"
          type="datetime-local"
          id="fechaDeVisita"
          name="fechaDeVisita"
          placeholder="aaaa-mm-dd hh:mm:ss"
        />
        <label className="labelCrearCita" htmlFor="seleccionar">
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
