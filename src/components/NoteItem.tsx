import { Note } from "../types/Note";
import { Tag } from "../types/Tag";
import { TagList } from "./TagList";
import { getTagsForNote } from "../helpers/functions";
import { Link } from "react-router-dom";
import { Button } from "./Button";

// props
type NoteItemProps = {
  note: Note;
  tags: Tag[];
  onDeleteNote: (id: string) => void;
};

// Componente para mostrar una nota
export const NoteItem = ({ note, tags, onDeleteNote }: NoteItemProps) => {
  // Obtenemos los tags de la nota
  const tagsForNote = getTagsForNote(note, tags);

  const handleDelete = () => {
    onDeleteNote(note.id);
  };

  return (
    <div className="w-full overflow-hidden shadow-lg bg-white p-4 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <Link to={`/note/edit/${note.id}`}>
          <h2 className="font-bold text-xl mb-2">{note.title}</h2>
        </Link>
      </div>
      <p className="text-gray-700 text-base">{note.content}</p>
      {tagsForNote.length > 0 && <TagList tags={tagsForNote} />}
      <div className="flex justify-end mt-4">
        <Button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Borrar
        </Button>
      </div>
    </div>
  );
};
