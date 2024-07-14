export type NoteData = {
  title: string;
  content: string;
  tagIds: string[]; // Los tags son opcionales
  isFixed: boolean; // Si la nota esta fijada
};

export type Note = NoteData & {
  id: string;
};
