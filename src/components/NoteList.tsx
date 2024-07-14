import { Note } from "../types/Note";
import { Tag } from "../types/Tag";
import { NoteItem } from "./NoteItem";

// props
type NoteListProps = {
  notes: Note[];
  tags: Tag[];
};

// Componente para mostrar la lista de notas
export const NoteList = ({ notes, tags }: NoteListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} tags={tags} />
      ))}
    </div>
  );
};
