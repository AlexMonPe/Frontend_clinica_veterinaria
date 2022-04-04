import { Link } from "react-router-dom";
import "./Header.css";
import store from "../../store/store.js";
import { useEffect, useState } from "react";

const Header = () => {
  const [logged, setlogged] = useState(store.getState().logged);
  

  useEffect(() => {
    store.subscribe(()=>{
      setlogged(store.getState().logged);
    console.log(store.getState().logged, 'estado logged storeeeeeeeeee')
    });
    
  }, []);   
  
  return (
    <header>
      <div className="enlaces">
        {logged && <Link to="/logout">Logout</Link>}
        {!logged && (
          <div>
            <div>
              <Link to="/registro">Registrarse</Link>
            </div>
            <div className="enlaces">
              <Link to="/login">Login</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
