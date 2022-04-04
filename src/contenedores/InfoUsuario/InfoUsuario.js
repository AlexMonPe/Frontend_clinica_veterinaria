import "./InfoUsuario.css";
import { useEffect, useState } from "react";

const InfoUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuario = async () => {
    const usuarioRes = await fetch(
      "https://veterinaria-back.herokuapp.com/usuarios?id=" +
        localStorage.getItem("id"),
      {
        method: "GET",
      }
    );
    const datosUsuario = await usuarioRes.json();
    setUsuarios(datosUsuario);
  };
  useEffect(() => {
    try {
      getUsuario();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      {usuarios.map((usuario) => {
        return (<div className="usuariosCard">
          <p>Nombre: {usuario.nombre}</p>
          <p>Apellidos: {usuario.apellidos}</p>
          <p>Email: {usuario.email}</p>
          <p>Telefono: {usuario.telefono}</p>
          <button type="button" className="botonOpcionesMascotas">Modificar datos</button>
        </div> )
        
      })}
    </div>
  );
};

export default InfoUsuario;
