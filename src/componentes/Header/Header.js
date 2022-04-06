import { Link } from "react-router-dom";
import "./Header.css";
import store from "../../store/store.js";
import { useEffect, useState } from "react";

const Header = () => {
  const [logged, setlogged] = useState(store.getState().logged);

  useEffect(() => {
    store.subscribe(() => {
      setlogged(store.getState().logged);
    });
  }, []);

  return (
    <header>
      {logged && (
        <div className="cabecera">
          <div className="enlaces">
            <Link to="/">Logout</Link>
            {}
          </div>
          <div className="enlaces">
            <Link to="/">Home</Link>
          </div>
        </div>
      )}
      {!logged && (
        <div>
          <div className="enlaces">
            <Link to="/registro">Registrarse</Link>
          </div>
          <div className="enlaces">
            <Link to="/login">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
