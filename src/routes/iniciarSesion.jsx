import { Outlet, Link } from "react-router-dom";
import './style.css';
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function Registro() {

  const [correoRegistro, setCorreoRegistroDoc] = useState("");
  const [contraseñaRegistro, setContraseñaRegistroDoc] = useState("");
  const [listaCorreoDoc, setlistaCorreoDoc] = useState([]);
  const [listaCorreoCui, setlistaCorreoCui] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003/credencialesDoctores").then((response) => {
      console.log(response.data);
      setlistaCorreoDoc(response.data);
    });

    Axios.get("http://localhost:3003/credencialesCuidadores").then((response) => {
      console.log(response.data);
      setlistaCorreoCui(response.data);
    });

  }, []);




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

      <p className="Titulos">Iniciar Sesión</p>

      <Outlet />

      <label > Correo: </label>
       <input type="text" id ="correito" onChange= {(e) => {
         setCorreoRegistroDoc(e.target.value) }}/>
         

        <label> Contraseña: </label>
        <input type="text" id ="contraseñita" onChange= {(e) => {
         setContraseñaRegistroDoc(e.target.value)}}/>

       <br></br>


       {listaCorreoDoc.map((val)=> {
         if (val.correo === correoRegistro && val.contraseña === contraseñaRegistro){
          return <button> <Link to="/menuDoctor">Iniciar Sesión</Link> {" "} </button>
         } 
       })}

      {listaCorreoCui.map((val)=> {
         if (val.correo === correoRegistro && val.contraseña === contraseñaRegistro){
          return <button> <Link to="/menuCuidador">Iniciar Sesión</Link> {" "} </button>
         
         }
       })}

       <br></br>
       <br></br>

       <center>¿No está registrado?</center>
       <br></br>
        <button>  <Link to="/registro">Registrarse</Link> {" "} </button>

        

      

      

      



       

      
    </div>
  );
}