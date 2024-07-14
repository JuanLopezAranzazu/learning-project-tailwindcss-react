import { Tag } from "../types/Tag";
// props
type TagProps = {
  tag: Tag;
};

// Componente para mostrar un tag
export const TagItem = ({ tag }: TagProps) => {
  return <span className="bg-sky-500 text-white rounded-full">{tag.name}</span>;
};
