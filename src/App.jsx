import "./App.css";
import { Backend } from "./Components/Backend";
import BotonRegresar from "./Components/BotonRegresar";
import { DesarrolloWeb } from "./Components/DesarrolloWeb";
import Intro from "./Components/Intro";
import { JavaScript } from "./Components/JavaScript";
import { React } from "./Components/React";

function App() {
  return (
    <>
      <BotonRegresar />
      <h1 style={{ marginBottom: 0 }}>Diccionario de Conceptos</h1>
      <p style={{ marginTop: 0, fontSize: 25, float: "right" }}>Full Stack</p>
      <Intro />
      <DesarrolloWeb />
      <JavaScript />
      <React />
      <Backend />
    </>
  );
}

export default App;
