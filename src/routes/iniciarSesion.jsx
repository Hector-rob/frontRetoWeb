import { Outlet, Link } from "react-router-dom";

export default function Registro() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/registro">Registro</Link> |{" "}
        
         {/*<Link to="/expenses">Expenses</Link>*/} 
      </nav>
      <Outlet />
    </div>
  );
}