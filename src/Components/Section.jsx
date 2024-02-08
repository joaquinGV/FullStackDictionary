import { IoIosRocket } from "react-icons/io";

export function Section({
  id,
  title,
  url,
  experiencia,
  proyectTitle,
  proyectDescription,
  proyectUrl,
  proyectText,
  children,
}) {
  return (
    <div className="concept-details" id={id}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <section>
        <h3>Experiencia:</h3>
        <p>{experiencia}</p>
        <h4>
          Projecto realizado:{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {proyectTitle}.
            <IoIosRocket className="icono" />
          </a>
        </h4>
        {proyectDescription ? (
          <p className="proyect-description">
            <b>Descripción del proyecto: </b>
            {proyectDescription}
            {proyectUrl && (
              <a href={proyectUrl} target="_blank" rel="noopener noreferrer">
                {proyectText}
              </a>
            )}
          </p>
        ) : (
          ""
        )}
      </section>
      <div className="children-div">{children}</div>
    </div>
  );
}
