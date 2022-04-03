import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListadoMascota = () => {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const getUser = () => {
     setTimeout(async () => {
       const usersResults = await fetch("https://veterinaria-back.herokuapp.com/mascotas/", {
         method: "GET",

       });
       const dataUsers = await usersResults.json();
       setUsers(dataUsers);
       setLoading(false);
     }, 3000);
   };
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
  
export default ListadoMascota;