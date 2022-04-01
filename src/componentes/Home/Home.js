import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home-contenedor">
            <header>
                <div className="enlaces">
                <Link to="/registro">Crear Cuenta</Link>    
   
                </div>
                <div className="enlaces">
                   
                <Link to="/login">Login</Link>
   
                </div>
            </header>
            <hr />
            <div>
                <h1>CLINICA VETERINARIA DAROAL</h1>
            </div>
            <div>
            <img src="https://www.clinicaveterinarialeon.com/uploads/FmbxKuGm/767x0_1170x0/clinica-veterinaria-leon-gato-y-perro-pequenos.jpg"></img>
            </div>
            <footer>
                <div className="enlaces"><a href="https://github.com/dvdsanar">David</a></div>
                <div className="enlaces"><a href="https://github.com/Rogeliotoro">Rogelio</a></div>
                <div className="enlaces"><a href="https://github.com/AlexMonPe">Alex</a></div>               
            </footer>
        </div>
    )
}

export default Home;