import { Note } from "../types/Note";
import { Tag } from "../types/Tag";

// Función para obtener los tags de una nota
export function getTagsForNote(note: Note, tags: Tag[]): Tag[] {
  return note.tagIds
    .map((tagId) => tags.find((tag) => tag.id === tagId))
    .filter((tag) => tag !== undefined) as Tag[];
}
