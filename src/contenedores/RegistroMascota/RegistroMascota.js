import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./RegistroMascota.css";

const RegistroMascota = () => {
  const dispatch = useDispatch()
  const navegar = useNavigate();
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

      const crearMascota = await fetch(
        "https://veterinaria-back.herokuapp.com/mascotas",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (crearMascota) {
        dispatch({ type: "VER_POPUP", payload: "Has creado a  "+ crearMascota.nombre_mascota });
        setTimeout(()=>dispatch({type: "CERRAR_POPUP"}), 3000)
        navegar("/listadoMascota/" + crearMascota.userId);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
  return (
    <div className="crearMascota">
      <header>
        <div className="enlaceMascota">
          <Link to="/">Home</Link>
        </div>
      </header>
      <h1>Registro de Mascotas Cute</h1>
      <form className="formulario" onSubmit={(e) => formSubmit(e)}>
        <label for="nombre_mascota">nombre_mascota</label>
        <input type="text" id="nombre_mascota" name="nombre_mascota" />
        <label for="peso">peso</label>
        <input type="text" id="peso" name="peso" />
        <label for="fecha_nacimiento">fecha_nacimiento</label>
        <input type="datetime-local" id="fecha_nacimiento" name="fecha_nacimiento" placeholder="aaaa-mm-dd hh:mm:ss"/>
        <label for="doctor">doctor</label>
        <input type="text" id="doctor" name="doctor" />
        <label for="idUsuario">idUsuario</label>
        <input type="text" id="idUsuario" name="idUsuario" />
        <input type="submit" value="Registrar" className="sendButton" />
        <Footer />
      </form>
    </div>
  );
};

export default RegistroMascota;
