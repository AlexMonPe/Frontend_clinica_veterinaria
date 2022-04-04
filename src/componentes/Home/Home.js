import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.js";

const Home = () => {
  return (
    <div className="home-contenedor">
      <div>
        <h1>CLINICA VETERINARIA DAROAL</h1>
      </div>
      <div>
        <img src="https://www.clinicaveterinarialeon.com/uploads/FmbxKuGm/767x0_1170x0/clinica-veterinaria-leon-gato-y-perro-pequenos.jpg"></img>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
