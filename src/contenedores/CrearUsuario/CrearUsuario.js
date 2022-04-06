import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import "./CrearUsuario.css";

const CrearUsuario = () => {
  const dispatch = useDispatch()
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
        const usuarioCreado = await postUser.json()
      console.log("Se ha enviado el formulario correctamente", usuarioCreado);

      if (usuarioCreado) {
        
        alert("ha ido bien el post user");
        dispatch(actionCreator("VER_POPUP", "Usuario creado. Bienvenido"));
        setTimeout(()=>dispatch(actionCreator("CERRAR_POPUP")), 3000)
        navegar("/login");
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };

  return (
    <div className="crearUsuario">
      <h2>REGISTRO DE USUARIO</h2>
      <form onSubmit={(e) => formSubmit(e)} className="formCrearUsuario">
        <label className="labelCrearUsuario" for="nombre">
          Nombre
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="nombre"
          name="nombre"
        />
        <label className="labelCrearUsuario" for="apellidos">
          Apellidos
        </label>
        <input
          className="inputCrearUsuario"
          type="text"
          id="apellidos"
          name="apellidos"
        />
        <label className="labelCrearUsuario" for="email">
          Email
        </label>
        <input
          className="inputCrearUsuario"
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@dominio.com"
        />
        <label className="labelCrearUsuario" for="contraseña">
          Contraseña
        </label>
        <input
          className="inputCrearUsuario"
          type="password"
          id="contraseña"
          name="contraseña"
        />
        <label className="labelCrearUsuario" for="tel">
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
