import { Tag } from "../types/Tag";

type SelectedTagsProps = {
  tags: Tag[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

type TagItemProps = {
  tag: Tag;
  selected: boolean;
  onClick: () => void;
};

// Componente para mostrar los tags seleccionados
export const SelectedTags = ({
  tags,
  selectedTags,
  setSelectedTags,
}: SelectedTagsProps) => {
  const toggleTagSelection = (tag: Tag) => {
    if (selectedTags.find((t) => t === tag.id)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag.id]);
    }
  };

  return (
    <div className="flex flex-wrap mt-4">
      {tags.map((tag) => (
        <TagItem
          key={tag.id}
          tag={tag}
          selected={!!selectedTags.find((t) => t === tag.id)}
          onClick={() => toggleTagSelection(tag)}
        />
      ))}
    </div>
  );
};

// Componente para mostrar un tag seleccionado
const TagItem = ({ tag, selected, onClick }: TagItemProps) => {
  return (
    <span
      className={`inline-block cursor-pointer px-3 py-1 mr-2 text-sm font-medium rounded-full ${
        selected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}
      onClick={onClick}
    >
      {tag.name}
    </span>
  );
};
