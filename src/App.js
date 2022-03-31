import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"></Route>
          <Route path="/registro" element={<RegistroUsuario />}></Route>
          <Route path="/listado" element={<ListadoUsuario />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
import { BrowserRouter } from 'react-router-dom';

export default App;
