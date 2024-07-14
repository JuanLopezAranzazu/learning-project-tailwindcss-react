import { useState, useEffect } from "react";
import { Button } from "./Button";
import { ArrowUp } from "../icons/ArrowUp";

// Componente de botón para subir
export const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll hasta arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Agregar y remover el evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      className={`fixed bottom-5 right-5 shadow-lg transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </Button>
  );
};
