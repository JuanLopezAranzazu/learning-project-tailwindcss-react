import { Note } from "../types/Note";
import { Tag } from "../types/Tag";
import { TagList } from "./TagList";
import { getTagsForNote } from "../helpers/functions";

// props
type NoteItemProps = {
  note: Note;
  tags: Tag[];
};

// Componente para mostrar una nota
export const NoteItem = ({ note, tags }: NoteItemProps) => {
  // Obtenemos los tags de la nota
  const tagsForNote = getTagsForNote(note, tags);

  return (
    <div className="w-full overflow-hidden shadow-lg bg-white p-4 rounded-md">
      <h2 className="font-bold text-xl mb-2">{note.title}</h2>
      <p className="text-gray-700 text-base">{note.content}</p>
      {tagsForNote.length > 0 && <TagList tags={tagsForNote} />}
    </div>
  );
};
