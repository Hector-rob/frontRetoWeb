import Axios from "axios";
import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";


export default function RegistroDoc() {
    const [idDoctor, setIdDoctor] = useState("");
    const [idPacientes, setIdPacientes] = useState("");
    const [nombreDoctor, setNombreDoctor] = useState("");
    const [apellidosDoctor, setApellidosDoctor] = useState("");
    const [organizacion, setOrganizacion] = useState("");
    const [numPacientesAsignados, setNumPacientes] = useState("");
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
        numPacientesDoctor: numPacientesAsignados,
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
      <h1 className="Subtitulos"> REGISTRO DE DOCTORES </h1>
       <label> Id del doctor: </label>
       <input type="text" idDoctor="id" onChange= {(e) => {
         setIdDoctor(e.target.value)}}/>

        <label> Id de los pacientes asignados: </label>
       <input type="text" idPacientes="id" onChange= {(e) => {
         setIdPacientes(e.target.value)}}/>

       <label> Nombre del doctor: </label>
       <input type="text" nombrePaciente="nombre" onChange= {(e) => {
         setNombreDoctor(e.target.value)}}/>
        
        <label> Apellidos : </label>
       <input type="text" apellidosDoctor="apellidos" onChange= {(e) => {
         setApellidosDoctor(e.target.value)}}/>

        <label> Organización: </label>
       <input type="text" organizacion="organización" onChange= {(e) => {
         setOrganizacion(e.target.value)}}/>

        <label> Número de pacientes asignados: </label>
       <input type="text" numPacientesAsignados="num de pacientes" onChange= {(e) => {
         setNumPacientes(e.target.value)}}/>

        <label> Correo del doctor: </label>
       <input type="text" correo="correo" onChange= {(e) => {
         setCorreoD(e.target.value)}}/>

        <label> Contraseña: </label>
       <input type="text" contraseña="contraseña" onChange= {(e) => {
         setContraseñaD(e.target.value)}}/>

        <br></br>

       <button onClick={submmitDoctor}> Submit </button>

       <br></br>
       <br></br>

       <h1 className="Subtitulos"> Doctores registrados </h1>

       {doctorLista.map((val)=> {
        
         return <h3> ID del doctor: {val.idDoctor} | Nombre del doctor: {val.nombreDoctor} | Id de pacientes asignados: {val.idPacientes}
         | Apellidos: {val.apellidosDoctor}  | Organización: {val.organizacion} | Número de pacientes asignados: {val.numPacientesAsignados} | Correo doctor: {val.correo}
         | Contraseña: {val.contraseña} </h3>
         
       })}
        <Link to="/menuDoctor">Iniciar Sesion</Link> |{" "}
    </div>
  );
}
