import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import { About } from "./pages/About";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Note, NoteData } from "./types/Note";

// Componente principal
function App() {
  const [tags, setTags] = useLocalStorage<string[]>("TAGS", [
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
      return [...prevNotes, { id: uuidV4(), ...data }];
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
        <Route index element={<Home notes={notes} tags={tags} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
