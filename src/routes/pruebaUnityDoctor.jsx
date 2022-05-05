import Unity, { UnityContext } from "react-unity-webgl";
import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

const unityContext = new UnityContext({
  loaderUrl: "build/UnityWebReto.loader.js",
  dataUrl: "build/UnityWebReto.data",
  frameworkUrl: "build/UnityWebReto.framework.js",
  codeUrl: "build/UnityWebReto.wasm",
});

export default function PruebaDoctor(){

  const [idPrueba, setIdPrueba] = useState("");
  const [pacientePrueba, setPacientePrueba] = useState("");
  const [idAplicadorCuidador, setAplicadorCuidador] = "1"; 
  const [idAplicadorDoctor, setAplicadorDoctor] = useState("");
  const [fechaPrueba, setFechaPrueba] = useState("");
  const [puntajePrueba, setPuntajePrueba] = useState("");
  const [comentariosExtra, setComentariosExtra] = useState("");

  const [pruebaLista, setPruebaLista] = useState([]);

  const [buscando, setBuscando] = useState("");
  const [idCuidadorBuscando, setIdCuidadorBuscando] = useState("");


  const [idCuidadorLista, setIdCuidadorLista] = useState([]);
  const [pacienteLista, setPacienteLista] = useState([]);

  const [doctorLista, setDoctorLista] = useState([]);
  

  const submitPrueba = () => {
    Axios.post('http://localhost:3003/subirPrueba', {
      idPruebaPrueba:idPrueba, 
      pacientePruebaPrueba: pacientePrueba, 
      idAplicadorDoctorPrueba: idAplicadorDoctor,
      idAplicadorCuidadorPrueba: idAplicadorCuidador,
      fechaPruebaPrueba: fechaPrueba,
      puntajePruebaPrueba: puntajePrueba,
      comentariosExtraPrueba: comentariosExtra
      
      }).then(()=>{
        window.alert("Prueba registrada");
        
      })
  };

  useEffect(() => {
    Axios.get("http://localhost:3003/verPruebas").then((response) => {
      console.log(response.data);
      setPruebaLista(response.data);
    });

  }, []);
 
  
  useEffect(() => {
    Axios.get("http://localhost:3003/verCuidadores").then((response) => {
      console.log(response.data);
      setIdCuidadorLista(response.data);
    });

  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3003/verPacientes").then((response) => {
      console.log(response.data);
      setPacienteLista(response.data);
    });

  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3003/verDoctores").then((response) => {
      console.log(response.data);
      setDoctorLista(response.data);
    });

  }, []);


  class Botoncito extends React.Component{
    state = {
      showMessage: false
    }
    onButtonClickHandler = () => {
     this.setState({showMessage: true});
    };
  
    render(){ 
      return(<div className="App">
       {this.state.showMessage && <p>   {pacienteLista.map((val)=> {
            return <p> <center> ID del paciente: {val.idPaciente} | Nombre: {val.nombrePaciente} {val.apellidoP} {val.apellidoM}</center> </p>
          })}
        </p>}
        <button onClick={this.onButtonClickHandler}>Ver pacientes</button>
      </div>);
  
    }
  }





    return( 
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

      <h1 className="Titulos"> PRUEBA SARCOPENIA </h1>

      <Unity style={{
            width: "100%",
            height: "110%",
            justifySelf: "center",
            alignSelf: "center",
            display : "inline-block"

        }} 
        unityContext={unityContext}
         />

         <div>

         <h1 className="Titulos"> REGISTRAR PRUEBA </h1>

         <label> Ingrese su correo: </label>
        <input type="text" buscar="buscar" onChange= {(e) => {
         setBuscando(e.target.value)}}/>
         {doctorLista.map((val)=> {
           if (buscando === val.correo){
        
            return <p> <center> Su ID de doctor es: {val.idDoctor}</center> </p>
           }
          })}

        <label> ID de doctor: </label>
       <input type="text" idcuidador="idcuidador" onChange= {(e) => {
         setAplicadorDoctor(e.target.value)}}/>
         

        <label> ID del paciente: </label> 
       <input type="text" idpaciente="id" onChange= {(e) => {
         setPacientePrueba(e.target.value)}}/><br></br><Botoncito></Botoncito>

    
        

         <label> Fecha de prueba (AAAA-MM-DD): </label>
       <input type="text" fecha="fecha" onChange= {(e) => {
         setFechaPrueba(e.target.value)}}/>

        <label> Puntaje de prueba obtenido: </label>
       <input type="text" puntaje="puntaje" onChange= {(e) => {
         setPuntajePrueba(e.target.value)}}/>

        <label> Comentarios sobre la prueba: </label>
       <input type="text" comentarios="comentarios" onChange= {(e) => {
         setComentariosExtra(e.target.value)}}/>

        <br></br>
        <button onClick={submitPrueba} > Submit </button>
        
         </div>

    

     </div>
     );
   
}