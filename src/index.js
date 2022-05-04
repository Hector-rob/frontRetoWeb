import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import IniciarSesion from "./routes/iniciarSesion";
import MenuCuidador from "./routes/menuCuidador";
import MenuDoctor from "./routes/menuDoctor";
import Registro from "./routes/registro";
import RegistroCuidador from "./routes/registroCuidador";
import RegistroDoc from "./routes/registroDoc";
import RegistroPaciente from "./routes/registroPaciente";
//import Prueba from "./routes/pruebaUnity"

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
<Routes>
<Route> path
</Route>
<Route path="/" element={<IniciarSesion />}>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>No se encontró la página</p>
        </main>
      }
    />
      </Route>
<Route path="/registro" element={<Registro />}>
      <Route path="doctor" element={<RegistroDoc />} />
      <Route path="cuidador" element={<RegistroCuidador />} />
      <Route path="paciente" element={<RegistroPaciente />} />
</Route>
<Route path="/menuCuidador" element={<MenuCuidador />}>
</Route>
<Route path="/menuDoctor" element={<MenuDoctor />}>
</Route>






    </Routes>
</BrowserRouter>,rootElement);