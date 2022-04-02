import "./BorrarMascota.css";

import { useNavigate } from "react-router-dom";

const BorrarMascota = () => {
  //const history = useNavigate();
  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        idMascota: e.target[0].value,
      };

      const deleteMascota = await fetch(
        "https://veterinaria-back.herokuapp.com/mascotas/" + formData.idMascota,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (deleteMascota) {
        //history("/listado/" + postUser.userId);
        return alert(
          "Has borrado la mascota " +
            formData.idMascota +
            " de la base de datos"
        );
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };

  return (
    <div>
      <h1>¿Qué mascota deseas eliminar de nuestra clínica?</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <label for="idMascota">
          Introduce el número de la mascota que deseas eliminar :(
        </label>
        <input type="text" id="idMascota" name="idMascota" />
        <input type="submit" value="SEND" className="sendButton" />
      </form>
    </div>
  );
};

export default BorrarMascota;
