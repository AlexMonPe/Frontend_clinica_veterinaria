import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import { CERRAR_POPUP, VER_POPUP } from "../../store/types";
import "./CrearUsuario.css";

const CrearUsuario = () => {
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        nombre: e.target[0].value,
        apellidos: e.target[1].value,
        email: e.target[2].value,
        contraseña: e.target[3].value,
        telefono: e.target[4].value,
      };

      const postUser = await fetch(
        "https://veterinaria-back.herokuapp.com/usuarios",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const usuarioCreado = await postUser.json();

      if (usuarioCreado) {
        dispatch(actionCreator(VER_POPUP, "Usuario creado. Bienvenido"));
        setTimeout(() => dispatch(actionCreator(CERRAR_POPUP)), 3000);
        navegar("/login");
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };

  return (
    <div className="crearUsuario">
      <h2 className="h2registro">REGISTRO DE USUARIO</h2>
      <form onSubmit={(e) => formSubmit(e)} className="formCrearUsuario">
        <label className="labelCrearUsuario" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="nombre"
          name="nombre"
        />
        <label className="labelCrearUsuario" htmlFor="apellidos">
          Apellidos
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="apellidos"
          name="apellidos"
        />
        <label className="labelCrearUsuario" htmlFor="email">
          Email
        </label>
        <input
          className="inputCrearUsuario"
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@dominio.com"
        />
        <label className="labelCrearUsuario" htmlFor="contraseña">
          Contraseña
        </label>
        <input
          className="inputCrearUsuario"
          type="password"
          id="contraseña"
          name="contraseña"
        />
        <label className="labelCrearUsuario" htmlFor="tel">
          Telefono
        </label>
        <input
          className="inputCrearUsuario"
          type="tel"
          id="tel"
          name="tel"
          maxLength="9"
          minLength="9"
        />
        <input
          className="botonCrearUsuario"
          type="submit"
          value="Registrarse"
        />
      </form>
    </div>
  );
};

export default CrearUsuario;
