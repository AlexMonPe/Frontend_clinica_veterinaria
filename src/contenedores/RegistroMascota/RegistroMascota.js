import { useNavigate } from "react-router-dom";
import "./RegistroMascota.css"

const RegistroMascota = () => {
  const history = useNavigate();
  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        nombre_mascota: e.target[0].value,
        peso: e.target[1].value,
        fecha_nacimiento: e.target[2].value,
        doctor: e.target[3].value,
        idUsuario: e.target[4].value,
      };

      const crearMascota = await fetch("https://veterinaria-back.herokuapp.com/mascotas", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Form Sumbmit works", crearMascota);

      if (crearMascota) {
        history("/listadoMascota/" + crearMascota.userId);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
  return (
    <div>
      <h1>Registro de Mascotas Cute</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <label for="nombre_mascota">nombre_mascota</label>
        <input type="text" id="nombre_mascota" name="nombre_mascota" />
        <label for="peso">peso</label>
        <input type="text" id="peso" name="peso" />
        <label for="fecha_nacimiento">fecha_nacimiento</label>
        <input type="text" id="fecha_nacimiento" name="fecha_nacimiento" />
        <label for="doctor">doctor</label>
        <input type="text" id="doctor" name="doctor" />
        <label for="idUsuario">idUsuario</label>
        <input type="text" id="idUsuario" name="idUsuario" />
        <input type="submit" value="SEND" className="sendButton" />
      </form>
    </div>
  );
};

export default RegistroMascota;