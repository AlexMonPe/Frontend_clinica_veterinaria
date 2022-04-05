import "./BorrarMascota.css";

import { useParams, useNavigate } from "react-router-dom";

const BorrarMascota = () => {
  const navegar = useNavigate();
  const params = useParams();
  const byePet = async (e) => {
    try {
      const deleteMascota = await fetch(
        "https://veterinaria-back.herokuapp.com/mascotas/" + params.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (deleteMascota) {
        navegar("/areaCliente");
        return alert("Has borrado tu mascota de la base de datos");
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };
};

export default BorrarMascota;
