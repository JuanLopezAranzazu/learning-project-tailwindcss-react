import { Note } from "../types/Note";
import { Tag } from "../types/Tag";
import { NoteList } from "../components/NoteList";

// props
type HomeProps = {
  notes: Note[];
  tags: Tag[];
};

// Componente para la página de inicio
export const Home = ({ notes, tags }: HomeProps) => {
  // Filtrar las notas fijadas
  const fixedNotes = notes.filter((note) => note.isFixed);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Notas fijadas</h2>
        <NoteList notes={fixedNotes} tags={tags} />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Otras notas</h2>
        <NoteList notes={notes} tags={tags} />
      </div>
    </div>
  );
};
