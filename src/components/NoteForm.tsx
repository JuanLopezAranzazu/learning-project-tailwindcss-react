import { useState } from "react";
import { NoteData } from "../types/Note";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

type FormErrors = {
  title: string;
  content: string;
};

type FormValues = {
  isFixed: boolean;
} & FormErrors;

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
} & Partial<NoteData>;

export const NoteForm = ({
  onSubmit,
  title = "",
  content = "",
  isFixed = false,
}: NoteFormProps) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title,
    content,
    isFixed,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  // Funcion para manejar los cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    const value: string = e.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    const error = helper(name, value);
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  // Funcion para validar los campos del formulario
  const helper = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "title":
        error = !value
          ? "El titulo es obligatorio"
          : value.length < 3 || value.length > 128
          ? "El titulo debe ser de 3 y 128 caracteres"
          : "";
        break;
      case "content":
        error = !value
          ? "El contenido debe ser obligatorio"
          : value.length < 6 || value.length > 512
          ? "El contenido debe ser de 6 y 512 caracteres"
          : "";
        break;
      default:
        break;
    }
    return error;
  };

  // Función para validar el formulario
  const validateForm = (errors: FormErrors): boolean => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  // Funcion para manejar el envio del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm(formErrors)) {
      console.error("Formulario invalido");
      return;
    }
    onSubmit({ ...formValues, tagIds: [] });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Título:
        </label>
        <input
          type="text"
          value={formValues.title}
          onChange={handleChange}
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formErrors.title && (
          <p className="text-red-500 text-xs italic">{formErrors.title}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contenido:
        </label>
        <textarea
          value={formValues.content}
          onChange={handleChange}
          name="content"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formErrors.content && (
          <p className="text-red-500 text-xs italic">{formErrors.content}</p>
        )}
      </div>
      <div className="flex gap-2">
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar
        </Button>
        <Button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => navigate("/")}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};
