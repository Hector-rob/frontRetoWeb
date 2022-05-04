import Axios from "axios";
import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";


export default function RegistroPaciente() {

  // Para pacientes
  const [idPaciente, setIdPaciente] = useState("");
  const [responsable, setResponsable] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [padecimientos, setPadecimientos] = useState("");
  const [telefonoContacto, setTelefonoContacto] = useState("");
  const [sexo, setSexo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [quejaMemoria, setQuejaMemoria] = useState("");


  const [pacienteLista, setPacienteLista] = useState([]);

  const submitPaciente = () => {
    Axios.post("http://localhost:3003/agregarPaciente", {
      idPacientePaciente:idPaciente, 
      responsablePaciente: responsable, 
      nombrePacientePaciente: nombrePaciente, 
      apellidoPPaciente: apellidoP,
      setApellidoMPaciente: apellidoM,
      padecimientosPaciente: padecimientos,
      telefonoContactoPaciente: telefonoContacto,
      sexoPaciente: sexo,
      fechaNacimientoPaciente: fechaNacimiento,
      quejaMemoriaPaciente: quejaMemoria
      
      }).then(()=>{
        alert("successful insert");
        
      })
  };

  useEffect(() => {
    Axios.get("http://localhost:3003/verPacientes").then((response) => {
      console.log(response.data);
      setPacienteLista(response.data);
    });

  }, []);
  
 


  return (
    <div className="App">
      <h1 className="Subtitulos"> REGISTRO DE PACIENTE </h1>
       <label> Id del Paciente: </label>
       <input type="text" idPaciente="id" onChange= {(e) => {
         setIdPaciente(e.target.value)}}/>

       <label> Nombre del paciente: </label>
       <input type="text" nombrePaciente="nombre" onChange= {(e) => {
         setNombrePaciente(e.target.value)}}/>
        
        <label> Apellido paterno: </label>
       <input type="text" apellidoP="apellido paterno" onChange= {(e) => {
         setApellidoP(e.target.value)}}/>

        <label> Apellido materno: </label>
       <input type="text" apellidoM="apellido materno" onChange= {(e) => {
         setApellidoM(e.target.value)}}/>

        <label> Responsable: </label>
       <input type="text" responsable="responsable" onChange= {(e) => {
         setResponsable(e.target.value)}}/>

        <label> Padecimientos del paciente: </label>
       <input type="text" padecimientos="padecimientos" onChange= {(e) => {
         setPadecimientos(e.target.value)}}/>

        <label> Teléfono de contacto: </label>
       <input type="text" telefonoContacto="teléfono" onChange= {(e) => {
         setTelefonoContacto(e.target.value)}}/>

        <label> Sexo: </label>
       <input type="text" sexo="sexo" onChange= {(e) => {
         setSexo(e.target.value)}}/>

        <label> Fecha de nacimiento: </label>
       <input type="text" fechaNacimiento="fecha de nacimiento" onChange= {(e) => {
         setFechaNacimiento(e.target.value)}}/>

        <label> Queja de memoria: </label>
       <input type="text" quejaMemoria="queja de memoria" onChange= {(e) => {
         setQuejaMemoria(e.target.value)}}/>

        <br></br>

       <button onClick={submitPaciente}> Submit </button>

       <br></br>
       <br></br>
       

       <h1 className="Subtitulos"> Pacientes registrados </h1>



       {pacienteLista.map((val)=> {
         
        if (val.quejaMemoria == 1) {
          val.quejaMemoria = "Sí";
        }
        else if (val.quejaMemoria == 0) {
          val.quejaMemoria = "No";
        }

         return <h3> ID del paciente: {val.idPaciente} | Nombre del paciente: {val.nombrePaciente} 
         | Apellidos: {val.apellidoP}  {val.apellidoM} | Padecimientos: {val.padecimientos} | Teléfono de contacto: {val.telefonoContacto} | Sexo: {val.sexo}
         | Fecha de nacimiento: {val.fechaNacimiento} | Queja de memoria: {val.quejaMemoria}</h3>
         
       })}

       


        


    </div>
  );
}