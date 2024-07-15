import { useNavigate } from "react-router-dom";
import { NoteForm } from "../components/NoteForm";
import { NoteData } from "../types/Note";
import { useNote } from "../components/NoteLayout";
import { Tag } from "../types/Tag";

type NoteAddProps = {
  onUpdateNote: (id: string, data: NoteData) => void;
  tags: Tag[];
};

// Componente para agregar una nota
export const NoteEdit = ({ onUpdateNote, tags }: NoteAddProps) => {
  const navigate = useNavigate();
  const note = useNote();

  // Funcion para manejar el envio del formulario
  const handleSubmit = (id: string, data: NoteData) => {
    onUpdateNote(id, data);
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Editar nota</h1>
      <NoteForm
        onSubmit={(data) => handleSubmit(note.id, data)}
        title={note.title}
        content={note.content}
        isFixed={note.isFixed}
      />
    </div>
  );
};
