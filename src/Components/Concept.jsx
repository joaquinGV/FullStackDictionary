import "./Concept.css";
import { useState } from "react";

export function Concept({ children, number, titulo }) {
  const [clickState, setClickState] = useState(false);

  const toggleClickStyle = () => {
    setClickState(!clickState);
  };

  return (
    <details className={"concept-details"}>
      <summary
        className={`summary-style ${clickState && "rounded-summary"}`}
        onClick={toggleClickStyle}
      >
        {number}.- {titulo}
      </summary>
      <p className={`${clickState && "rounded-p"}`}>
        <ul>{children}</ul>
      </p>
    </details>
  );
}
