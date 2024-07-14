// props
type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

// Componente de botón reutilizable
export const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};
