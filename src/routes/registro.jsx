import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";


export default function Registro() {
  return (
    
    <div>
      
      <br></br>
      <center>
        <img src= {Logo}></img>
      </center>
      
      <br></br>

      <h1 className="Titulos">Registro </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="doctor">Registrar doctor</Link> |{" "}
        <Link to="cuidador">Registrar cuidador</Link> |{" "}
        <Link to="/">Sí tengo una cuenta</Link> |{" "}
        <Link to="paciente">Registro paciente</Link> |{" "}

         {/*<Link to="/expenses">Expenses</Link>*/} 
      </nav>
      <Outlet />
    </div>
  );
}