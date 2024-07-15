import { useOutletContext } from "react-router-dom";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../types/Note";

type NoteLayoutProps = {
  notes: Note[];
};

// Componente que se encarga de renderizar la nota actual
export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
}

// Hook que se encarga de obtener la nota actual
export function useNote() {
  return useOutletContext<Note>();
}
