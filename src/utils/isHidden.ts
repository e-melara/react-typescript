import { DragItem } from "../state/interfaces";

interface Props {
  draggedItem: DragItem | undefined;
  itemType: string;
  id: string;
  isPreview?: boolean;
}

export const isHidden = ({
  draggedItem,
  id,
  itemType,
  isPreview,
}: Props): boolean => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  );
};
