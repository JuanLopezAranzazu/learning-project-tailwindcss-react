import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ButtonUp } from "../components/ButtonUp";

// Componente de diseño de la aplicación
export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
      <ButtonUp />
    </div>
  );
};
