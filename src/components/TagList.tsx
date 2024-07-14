import { Tag } from "../types/Tag";
import { TagItem } from "./TagItem";

// props
type TagListProps = {
  tags: Tag[];
};

// Componente para mostrar la lista de tags
export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </div>
  );
};
