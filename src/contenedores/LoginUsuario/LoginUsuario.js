import { useNavigate } from "react-router-dom";


const LoginUsuario = () => {
    const navegar = useNavigate();
    const formSubmit = async (e) => {
      // Make the submit dont refresh the page
      e.preventDefault();
      try {
        const formData = {
          email: e.target[0].value,
          contraseña: e.target[1].value,

        };
  
        let loginUser = await fetch("https://veterinaria-back.herokuapp.com/usuarios/login", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        loginUser = await loginUser.json()
        console.log(loginUser)

        console.log("Se ha enviado el formulario correctamente", loginUser);
  
        if (loginUser) {
          alert('Te has logeado correctamente. Bienvenido')
          //console.log(loginUser.token)
          //console.log(loginUser.id)
          localStorage.setItem("token", loginUser.token)
          localStorage.setItem("id", loginUser.id)

          navegar("/listado/");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="loginUsuario">
        <h1>Login de Usuario</h1>
        <form onSubmit={(e) => formSubmit(e)}>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
          <label for="contraseña">Contraseña</label>
          <input type="password" id="contraseña" name="contraseña" />
          <input type="submit" value="Entrar" className="sendButton" />
        </form>
      </div>
    );
  };
  
  export default LoginUsuario;