import { FaReadme } from "react-icons/fa6";

export function Enlace({ url }) {
  return (
    <a
      href={url}
      className="ref enlace"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaReadme className="icono" />
    </a>
  );
}
