// Componente de página de error 404
export const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800">Error 404</h2>
      <p className="text-lg text-gray-600 mt-4">
        Lo sentimos, la página que buscas no existe
      </p>
    </div>
  );
};
