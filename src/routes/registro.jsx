import { Outlet, Link } from "react-router-dom";

export default function Registro() {
  return (
    <div>
      <h1>Registro</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="doctor">Registrar doctor</Link> |{" "}
        <Link to="cuidador">Registrar cuidador</Link> |{" "}
        <Link to="/">Sí tengo una cuenta</Link> |{" "}

         {/*<Link to="/expenses">Expenses</Link>*/} 
      </nav>
      <Outlet />
    </div>
  );
}