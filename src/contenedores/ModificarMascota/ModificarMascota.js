import "./ModificarMascota.css";

import { useNavigate } from "react-router-dom";

const ModificarMascota = () => {
  //const history = useNavigate();
  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        idMascota: e.target[0].value,
        nombre_mascota: e.target[1].value,
        peso: e.target[2].value,
        doctor: e.target[3].value,
      };

      const patchMascota = await fetch(
        "https://veterinaria-back.herokuapp.com/mascotas/" + formData.idMascota,
        {
          method: "PATCH",
          body: JSON.stringify({
            nombre_mascota: formData.nombre_mascota,
            peso: formData.peso,
            doctor: formData.doctor,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (patchMascota) {
        //history("/listado/" + postUser.userId);
        return alert("Has modificado la mascota " + formData.nombre_mascota);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };

  return (
    <div>
      <h1>Modifica los datos de tu mascota que deseas actualizar</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <label for="idMascota">
          Introduce el número de la mascota que deseas modificar
        </label>
        <input type="text" id="idMascota" name="idMascota" />
        <label for="nombre_mascota">Introduzca el nombre de su mascota</label>
        <input type="text" id="nombre_mascota" name="nombre_mascota" />
        <label for="peso">Introduzca el peso de su mascota</label>
        <input type="text" id="peso" name="peso" />
        <label for="doctor">Introduzca el doctor que la atiende</label>
        <input type="text" id="doctor" name="doctor" />
        <input type="submit" value="SEND" className="sendButton" />
      </form>
    </div>
  );
};

export default ModificarMascota;
