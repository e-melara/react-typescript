import { DragItem } from "../state/interfaces";

interface Props {
  draggedItem: DragItem | undefined;
  itemType: string;
  id: string;
}

export const isHidden = ({ draggedItem, id, itemType }: Props): boolean => {
  return Boolean(
    draggedItem && draggedItem.type === itemType && draggedItem.id === id
  );
};
