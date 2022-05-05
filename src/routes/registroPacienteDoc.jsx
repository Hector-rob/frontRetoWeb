import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Outlet, Link, matchPath } from "react-router-dom";
import './style.css';
import Logo from "./logo.png";





export default function RegistroPacienteDoc() {

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
      apellidoMPaciente: apellidoM,
      padecimientosPaciente: padecimientos,
      telefonoContactoPaciente: telefonoContacto,
      sexoPaciente: sexo,
      fechaNacimientoPaciente: fechaNacimiento,
      quejaMemoriaPaciente: quejaMemoria
      
      }).then(()=>{
        window.alert("Paciente registrado");
        
      })
  };

  useEffect(() => {
    Axios.get("http://localhost:3003/verPacientes").then((response) => {
      console.log(response.data);
      setPacienteLista(response.data);
    });

  }, []);
  




  const [idCuidadorLista, setIdCuidadorLista] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003/verCuidadores").then((response) => {
      console.log(response.data);
      setIdCuidadorLista(response.data);
    });

  }, []);



  class App extends React.Component{
    state = {
      showMessage: false
    }
    onButtonClickHandler = () => {
     this.setState({showMessage: true});
    };
  
    render(){ 
      return(<div className="App">
       {this.state.showMessage && <p>{idCuidadorLista.map((val)=> {
        return (<div> ID del cuidador: {val.idCuidador} | Nombre del cuidador: {val.nombreCuidador} {val.apellidosCuidador}
        </div>)
        })}
</p>}
        <button onClick={this.onButtonClickHandler}>Ver cuidadores</button>
      </div>);
  
    }
  }


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

      <Link to="/menuDoctor">| Regresar a menú |</Link>
     
         
      </nav>
      <Outlet />
      <br></br>


      <h1 className="Titulos"> REGISTRO DE PACIENTE </h1>
      
      
       <label> Nombre del paciente: </label>
       <input type="text" nombrePaciente="nombre" onChange= {(e) => {
         setNombrePaciente(e.target.value)}}/>
        
        <label> Apellido paterno: </label>
       <input type="text" apellidoP="apellido paterno" onChange= {(e) => {
         setApellidoP(e.target.value)}}/>

        <label> Apellido materno: </label>
       <input type="text" apellidoM="apellido materno" onChange= {(e) => {
         setApellidoM(e.target.value)}}/>

      
        <label> ID del responsable: </label> 
       <input type="text" responsable="responsable" onChange= {(e) => {
         setResponsable(e.target.value)}}/> <p><App></App> </p>

        <label> Padecimientos del paciente: </label>
       <input type="text" padecimientos="padecimientos" onChange= {(e) => {
         setPadecimientos(e.target.value)}}/>

        <label> Teléfono de contacto: </label>
       <input type="text" telefonoContacto="teléfono" onChange= {(e) => {
         setTelefonoContacto(e.target.value)}}/>

        <label> Sexo: </label>
       <input type="text" sexo="sexo" onChange= {(e) => {
         setSexo(e.target.value)}}/>

        <label> Fecha de nacimiento (YYYY-MM-DD): </label>
       <input type="text" fechaNacimiento="fecha de nacimiento" onChange= {(e) => {
         setFechaNacimiento(e.target.value)}}/>

        <label> Queja de memoria (1 para Sí, 0 para No): </label>
       <input type="text" quejaMemoria="queja de memoria" onChange= {(e) => {
         setQuejaMemoria(e.target.value)}}/>

        <br></br>

       <button onClick={submitPaciente} > Submit </button>

 




    </div>
  );
}