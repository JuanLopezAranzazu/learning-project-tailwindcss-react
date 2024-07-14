import { useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { Menu } from "../icons/Menu";
import { Close } from "../icons/Close";
import { Link } from "react-router-dom";

// Componente para renderizar el header
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routes = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about",
      text: "About",
    },
  ];

  return (
    <header className="bg-slate-800 text-white flex justify-between px-6 py-4">
      <Link to="/">
        <h1 className="text-2xl font-bold">Google Keep Clone</h1>
      </Link>
      <nav
        className={`${
          isMenuOpen ? "flex bg-opacity-90" : "hidden"
        } fixed top-0 left-0 h-full w-full z-10 bg-slate-800 flex-col items-center justify-center gap-4 md:flex md:static md:bg-transparent md:flex-row md:items-center md:justify-between md:w-auto md:gap-2`}
      >
        {routes.map((route) => (
          <HeaderLink key={route.to} to={route.to} text={route.text} />
        ))}
        <button
          onClick={toggleMenu}
          className="md:hidden absolute top-6 right-6"
        >
          <Close />
        </button>
      </nav>
      <button onClick={toggleMenu} className="md:hidden">
        <Menu />
      </button>
    </header>
  );
};
