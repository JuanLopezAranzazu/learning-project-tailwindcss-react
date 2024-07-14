// Componente de página de error 404
export const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800">404 Not Found</h2>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};
