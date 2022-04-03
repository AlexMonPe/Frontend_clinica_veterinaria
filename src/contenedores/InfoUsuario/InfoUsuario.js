import "./InfoUsuario.css";
import { useEffect, useState } from "react";

const InfoUsuario = () => {
  const getUsuario = async () => {
    await fetch(
      "https://veterinaria-back.herokuapp.com/usuarios?idUsuario=" +
        localStorage.getItem("id"),
      {
        method: "GET",
      }
    );
  };
  useEffect(() => {
    try {
      getUsuario();
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default InfoUsuario;
