import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";


export default function RegistroDoc() {
    const [idDoctor, setIdDoctor] = useState("");
    const [idPacientes, setIdPacientes] = useState("");
    const [nombreDoctor, setNombreDoctor] = useState("");
    const [apellidosDoctor, setApellidosDoctor] = useState("");
    const [organizacion, setOrganizacion] = useState("");
    const [correo, setCorreoD] = useState("");
    const [contraseña, setContraseñaD] = useState("");
  
    const [doctorLista, setDoctorLista] = useState([]);

    const submmitDoctor = () => {
      Axios.post("http://localhost:3003/agregarDoctor", {
        idDoctorDoctor:idDoctor, 
        idPacientesDoctor: idPacientes, 
        nombreDoctorDoctor: nombreDoctor, 
        apellidosDoctorDoctor: apellidosDoctor,
        organizacionDoctor: organizacion,
        correoDoctor: correo,
        contraseñaDoctor: contraseña
        
        }).then(()=>{
          alert("successful insert");
          
        })
    };

    useEffect(() => {
      Axios.get("http://localhost:3003/verDoctores").then((response) => {
        console.log(response.data);
        setDoctorLista(response.data);
      });
  
    }, []);
 
  return (
    
    <div className="App">
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
      <Outlet />
      <br></br>


       <h1 className="Titulos"> Doctores registrados </h1>

       {doctorLista.map((val)=> {
        
         return <h3> ID del doctor: {val.idDoctor} | Nombre del doctor: {val.nombreDoctor} | Id de pacientes asignados: {val.idPacientes}
         | Apellidos: {val.apellidosDoctor}  | Organización: {val.organizacion}  | Correo doctor: {val.correo}
         | Contraseña: {val.contraseña} </h3>
         
       })}
        <button> <Link to="/menuDoctor">Iniciar Sesion</Link> {" "} </button>
    </div>
  );
}
