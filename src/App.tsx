import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import { About } from "./pages/About";
import { NoteAdd } from "./pages/NoteAdd";
import { NoteEdit } from "./pages/NoteEdit";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Note, NoteData } from "./types/Note";
import { NoteLayout } from "./components/NoteLayout";
import { Tag } from "./types/Tag";

// Componente principal
function App() {
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [
    { id: uuidv4(), name: "Personal" },
    { id: uuidv4(), name: "Trabajo" },
  ]);
  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", [
    {
      id: uuidv4(),
      title: "Nota de ejemplo",
      content: "Contenido de la nota de ejemplo",
      tagIds: [],
      isFixed: false,
    },
    {
      id: uuidv4(),
      title: "Nota fijada",
      content: "Contenido de la nota fijada",
      tagIds: [],
      isFixed: true,
    },
    {
      id: uuidv4(),
      title: "Otra nota de ejemplo",
      content: "Contenido de otra nota de ejemplo",
      tagIds: [],
      isFixed: false,
    },
  ]);

  const onAddNote = (data: NoteData) => {
    setNotes((prevNotes) => {
      return [...prevNotes, { id: uuidv4(), ...data }];
    });
  };

  const onUpdateNote = (id: string, data: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data };
        }
        return note;
      });
    });
  };

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={
            <Home notes={notes} tags={tags} onDeleteNote={onDeleteNote} />
          }
        />
        <Route
          path="note/add"
          element={<NoteAdd tags={tags} onAddNote={onAddNote} />}
        />
        <Route path="note/edit/:id" element={<NoteLayout notes={notes} />}>
          <Route
            index
            element={<NoteEdit onUpdateNote={onUpdateNote} tags={tags} />}
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
