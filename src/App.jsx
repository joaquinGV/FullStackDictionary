import "./App.css";
import { Backend } from "./Components/Backend";
import { DesarrolloWeb } from "./Components/DesarrolloWeb";
import { JavaScript } from "./Components/JavaScript";
import { React } from "./Components/React";

function App() {
  return (
    <>
      <h2>Diccionario de Conceptos</h2>
      <DesarrolloWeb />
      <JavaScript />
      <React />
      <Backend />
    </>
  );
}

export default App;
