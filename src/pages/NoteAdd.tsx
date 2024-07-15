import { useNavigate } from "react-router-dom";
import { NoteForm } from "../components/NoteForm";
import { NoteData } from "../types/Note";
import { Tag } from "../types/Tag";

type NoteAddProps = {
  onAddNote: (data: NoteData) => void;
  tags: Tag[];
};

// Componente para agregar una nota
export const NoteAdd = ({ onAddNote, tags }: NoteAddProps) => {
  const navigate = useNavigate();

  // Funcion para manejar el envio del formulario
  const handleSubmit = (data: NoteData) => {
    onAddNote(data);
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Agregar nota</h1>
      <NoteForm onSubmit={(data) => handleSubmit(data)} />
    </div>
  );
};
