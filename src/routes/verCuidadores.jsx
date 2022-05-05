import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";


export default function RegistroCuidador() {
  const [idCuidador, setIdCuidador] = useState("");
  const [nombreCuidador, setNombreCuidador] = useState("");
  const [apellidosCuidador, setApellidosCuidador] = useState("");
  const [telefonoCuidador, setTelefonoCuidador] = useState("");
  const [relacionPaciente, setRelacionPaciente] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [idCuidadorLista, setIdCuidadorLista] = useState([]);

  
 
  const submitCuidador = () => {
    Axios.post("http://localhost:3003/agregarCuidador", {
      idCuidadorCuidador:idCuidador, 
      nombreCuidadorCuidador: nombreCuidador, 
      apellidosCuidadorCuidador: apellidosCuidador, 
      telefonoCuidadorCuidador: telefonoCuidador,
      relacionPacienteCuidador: relacionPaciente,
      correoCuidador: correo,
      contraseñaCuidador: contraseña}).then(()=>{
        alert("successful insert");
      })
  };

  useEffect(() => {
    Axios.get("http://localhost:3003/verCuidadores").then((response) => {
      console.log(response.data);
      setIdCuidadorLista(response.data);
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
      <body><Link to="/menuDoctor">| Regresar a menú |</Link>  </body>
      </nav>

      <Outlet />

      <br></br>
      
      <h1 className="Titulos"> CUIDADORES REGISTRADOS </h1>
      <br></br>
     

       {idCuidadorLista.map((val)=> {
         return <h3> ID del cuidador: {val.idCuidador} | Nombre del cuidador: {val.nombreCuidador} 
         | Apellidos: {val.apellidosCuidador} | Teléfono: {val.telefonoCuidador} | Relación con paciente: {val.relacionPaciente}
         | Correo: {val.correo} | contraseña: {val.contraseña}</h3>
       })}
       <br></br>
       
    </div>
    
  );
  
}