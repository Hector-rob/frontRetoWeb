import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function MenuCuidador() {
    return (
      <div>
      <br></br>
      <center> <img src= {Logo}></img>  </center>
      <br></br>


  
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
         
      </nav>

      <p className="Titulos">Menú de cuidador</p>

      <Outlet />
      
      <br></br>
      <Link to="/menuCuidador/registrarPaciente"> <button className="buttonMenu"> Registrar paciente </button> </Link> {" "}
      <br></br>
      <Link to="/pruebaCuidador"> <button className="buttonMenu"> Realizar prueba </button> </Link> {" "}
      <br></br>

      <Link to="/"> <button className="buttonCerrarSesion"> Cerrar sesión </button> </Link> {" "}

      </div>
    );
}