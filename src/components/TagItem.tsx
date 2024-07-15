import { Tag } from "../types/Tag";
// props
type TagProps = {
  tag: Tag;
};

// Componente para mostrar un tag
export const TagItem = ({ tag }: TagProps) => {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full">
      {tag.name}
    </span>
  );
};
