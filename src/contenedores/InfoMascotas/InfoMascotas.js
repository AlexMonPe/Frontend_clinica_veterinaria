import "./InfoMascotas.css";
import { useEffect, useState } from "react";

const InfoMascotas = () => {
  const getMascotas = async () => {
    await fetch(
      "https://veterinaria-back.herokuapp.com/mascotas?idUsuario=" +
        localStorage.getItem("id"),
      {
        method: "GET",
      }
    );
  };
  useEffect(() => {
    try {
      getMascotas();
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default InfoMascotas;
