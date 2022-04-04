import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Listado = () => {
  /**
   * [Comentario hechos por Mihai]
   * useState crea un estado inicial dando users = []
   * setUsers(foo) actualizará el estado, realizará users = foo
   * setUsers es para actualizar a users
   */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //funcion asíncrona, que realiza un fetch a un API donde traemos los usuarios a una constante con el metodo GET
  //y lo llamamos fuera de esta función. [SUSANA]
  const getUser = () => {
    setTimeout(async () => {
      const usersResults = await fetch("https://veterinaria-back.herokuapp.com/usuarios", {
        method: "GET",
      });

      // Parsea los resultados de una petición a JSON
      // (esto nos permite trabajar con los datos) [Gonzalo]
      const dataUsers = await usersResults.json();

      /*
      Función que actualiza el estado del parametro users introduciendo dataUsers 
      y pinta de nuevo el componente
      dataUsers esta los datos, setUsers los actualiza.
    */
      setUsers(dataUsers);
      setLoading(false);
    }, 3000);
  };
  /* 
    el useEffect recibe dos parametros:
      1er: Ejecuta la función getuser que trae los usuarios
      2º: Por el array vacio solo se ejecute una sola vez 
      2º: Si cambia el contenido del array, este se ejecuta el primer parametro [ROGELIO] 
  */
  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Hola</h1>

      {loading && (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" />
      )}
      <select name="cars" id="cars">
        {users.map((user) => {
          return (
            <option value="volvo">
              {user.name}, {user.surname}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Listado;
