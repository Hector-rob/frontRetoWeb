import { Outlet, Link } from "react-router-dom";
import './style.css';
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function MenuDoctor() {
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

      <p className="Titulos">Menú de doctor</p>

      <Outlet />
      

      <Link to="/menuDoctor/registrarPaciente"> <button className="buttonMenu"> Registrar paciente </button> </Link> {" "}
      <br></br>

      <Link to="/menuDoctor/verPacientes"> <button className="buttonMenu"> Ver pacientes </button> </Link> {" "}
      <br></br>
      
      <Link to="/menuDoctor/verCuidadores"> <button className="buttonMenu"> Ver cuidadores </button> </Link> {" "}
      <br></br>

      <Link to="/menuDoctor/verDoctores"> <button className="buttonMenu"> Ver doctores </button> </Link> {" "}
      <br></br>

      <Link to="/pruebaDoctor"> <button className="buttonMenu"> Realizar prueba </button> </Link> {" "}
      <br></br>

      


      

      <Link to="/"> <button className="buttonMenuCerrarSesion"> Cerrar sesión </button> </Link> {" "}


     
      

      </div>
    );
}