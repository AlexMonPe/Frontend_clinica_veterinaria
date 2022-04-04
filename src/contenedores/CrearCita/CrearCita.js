import "./CrearCita.css";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CrearCita = () => {
  //const history = useNavigate();
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
        //history("/listado/" + postUser.userId);
        return alert("Has creado una cita para " + infoMascota.nombre_mascota);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
  console.log(mascotas, "mascotaaaaaaaaaaaaaaaaas");
  return (
    <div className="crearCita">
      <h2>Cita para mascota</h2>
      <form onSubmit={(e) => formSubmit(e)}>
        <label for="descripcion">Descripción de la visita</label>
        <input type="text" id="descripcion" name="descripcion" />
        <label for="fechaDeVisita">Fecha en la que desea la visita</label>
        <input
          type="datetime-local"
          id="fechaDeVisita"
          name="fechaDeVisita"
          placeholder="aaaa-mm-dd hh:mm:ss"
        />
        <select>
          {mascotas.map((mascota) => <option value={mascota.id}>{mascota.nombre_mascota}</option>)}
        </select>
        <label for="idMascota">Introduzca el número de su mascota</label>
        <input type="text" id="idMascota" name="idMascota" />
        <input type="submit" value="SEND" className="sendButton" />
      </form>
    </div>
  );
};

export default CrearCita;
