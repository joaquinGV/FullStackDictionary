import React from "react";

function Intro() {
  const redireccionarSeccion = (id) => {
    const elemento = document.getElementById(id);
    console.log(elemento);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" }); // Desplaza suavemente hacia la sección
    }
  };

  return (
    <>
      <div className="secciones">
        <h2>Motivo del Proyecto</h2>
        <p>
          Este material sirve de apoyo personal para repasar conceptos
          aprendidos y como evidencia de habilidades y conocimientos adquiridos
          considerando cada sección como un tema repasado entre 3 a 5 horas en
          promedio.
        </p>
        <p>
          A lo largo del curso de explicaron una gran cantidad de conceptos,
          muchos de los cuales no memorice por completo, pero aprendi mientras
          los practicaba, repasando todo el curso, entendí la dificultad que es
          explorar cada diapositiva de más de 40 paginas para recordar algo en
          especifico, por lo que decidi hacer un resumen unicamente de algunos
          conceptos del glosario u temas importantes de la clase.
        </p>
      </div>
      <div className="secciones">
        <h3>Cursos vistos:</h3>
        <ol>
          <li onClick={() => redireccionarSeccion("DesarrolloWeb")}>
            Desarrollo Web
          </li>
          <li onClick={() => redireccionarSeccion("JavaScript")}>JavaScript</li>
          <li onClick={() => redireccionarSeccion("React")}>React JS</li>
          <li onClick={() => redireccionarSeccion("Backend")}>Backend</li>
        </ol>
      </div>
    </>
  );
}

export default Intro;
