import { Link, useLocation } from "react-router-dom";

type HeaderLinkProps = {
  to: string;
  text: string;
};

// Componente para renderizar un link en el header
export const HeaderLink = ({ to, text }: HeaderLinkProps) => {
  const location = useLocation();
  // Verificar si la ruta actual es igual a la ruta del link
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`border-b-2 uppercase ${
        isActive ? "border-white" : "border-transparent"
      }`}
    >
      {text}
    </Link>
  );
};
