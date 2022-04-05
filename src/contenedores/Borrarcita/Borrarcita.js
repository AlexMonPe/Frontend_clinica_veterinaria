import "./Borrarcita.css";
import { useNavigate } from "react-router-dom";

const BorrarCita = () => {
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = {
            idMascota: e.target[0].value,
      };

      const deleteCita = await fetch(
        "https://veterinaria-back.herokuapp.com/citas/" + formData.idMascota,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (deleteCita) {
        //history("/listado/" + postUser.userId);
        return alert(
          "Has borrado la cita " +
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
      <h1>¿Qué cita deseas eliminar de nuestra clínica?</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <label for="idMascota">
          Introduce el número de la cita que deseas eliminar 🗒️
        </label>
        <input type="text" id="idMascota" name="idMascota" />
        <input type="submit" value="SEND" className="sendButton" />
      </form>
    </div>
  );
};

export default BorrarCita;