import { Link, useNavigate } from "react-router-dom";
import Footer from "../../componentes/Footer/Footer";
import "./CrearUsuario.css"

const CrearUsuario = () => {
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
        telefono: e.target[4].value
      };

      const postUser = await fetch("https://veterinaria-back.herokuapp.com/usuarios", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Se ha enviado el formulario correctamente", postUser);

      if (postUser) {
        alert('ha ido bien el post user')
        navegar("/areaCliente" + postUser.userId);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };

  return (
    <div className="crearUsuario">
      <h2>Registro de Usuario</h2>
      <form onSubmit={(e) => formSubmit(e)} className="form_crear_usuario">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" />
        <label for="apellidos">Apellidos</label>
        <input type="text" id="apellidos" name="apellidos" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" className="emailRegistro" placeholder="ejemplo@dominio.com"/>
        <label for="contraseña">Contraseña</label>
        <input type="password" id="contraseña" name="contraseña" />
        <label for="tel">Telefono</label>
        <input type="tel" id="tel" name="tel" maxLength="9" minLength="9" />
        <input type="submit" value="Registrarse" className="sendButton" />
      </form>
      <Footer />
    </div>
  );
};

export default CrearUsuario;
