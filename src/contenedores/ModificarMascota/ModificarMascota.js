import "./ModificarMascota.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ModificarMascota = () => {
  const params = useParams();
  //const history = useNavigate();
  const [mascota, setMascota] = useState({});
  const getMascotas = async () => {
    const mascotasRes = await fetch(
      "https://veterinaria-back.herokuapp.com/mascotas/" + params.id,
      {
        method: "GET",
      }
    );
    const mascotaData = await mascotasRes.json();

    setMascota(mascotaData);
    console.log(mascotaData, " dataaaaaaaaa");
  };
  useEffect(() => {
    try {
      getMascotas();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        nombre_mascota: e.target[0].value,
        peso: e.target[1].value,
        doctor: e.target[2].value,
      };

      const patchMascota = await fetch(
        "https://veterinaria-back.herokuapp.com/mascotas/" + params.id,
        {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (patchMascota) {
        //history("/listado/" + postUser.userId);
        return alert("Has modificado la mascota " + mascota.nombre_mascota);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };

  return (
    <div>
      <h1>Modifica los datos de tu mascota que deseas actualizar</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <label for="nombre_mascota">Introduzca el nombre de su mascota</label>
        <input
          type="text"
          id="nombre_mascota"
          name="nombre_mascota"
          defaultValue={mascota.nombre_mascota}
        />
        <label for="peso">Introduzca el peso de su mascota</label>
        <input type="text" id="peso" name="peso" defaultValue={mascota.peso} />
        <label for="doctor">Introduzca el doctor que la atiende</label>
        <input
          type="text"
          id="doctor"
          name="doctor"
          defaultValue={mascota.doctor}
        />
        <input type="submit" value="SEND" className="sendButton" />
      </form>
    </div>
  );
};

export default ModificarMascota;
