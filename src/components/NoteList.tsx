import { Note } from "../types/Note";
import { Tag } from "../types/Tag";
import { NoteItem } from "./NoteItem";

// props
type NoteListProps = {
  notes: Note[];
  tags: Tag[];
  onDeleteNote: (id: string) => void;
};

// Componente para mostrar la lista de notas
export const NoteList = ({ notes, tags, onDeleteNote }: NoteListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          tags={tags}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </div>
  );
};
