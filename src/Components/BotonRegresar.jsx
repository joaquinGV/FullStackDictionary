import { useState, useEffect } from "react";
import "./BotonRegresar.css"; // Importa el archivo CSS con estilos personalizados
import { FaArrowCircleUp } from "react-icons/fa";

function BotonRegresar() {
  const [mostrarBoton, setMostrarBoton] = useState(false);

  // Maneja el evento de scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setMostrarBoton(true);
    } else {
      setMostrarBoton(false);
    }
  };

  // Agrega un listener de scroll al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remueve el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Maneja el click en el botón para regresar al inicio
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`boton-regresar ${mostrarBoton ? "visible" : ""}`}
      onClick={handleClick}
    >
      <FaArrowCircleUp className="arrowup" size={32} />
    </button>
  );
}

export default BotonRegresar;
