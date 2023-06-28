import { useRef } from "react";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";

import Card from "./Card";
import AddNewItem from "./AddNewItem";
import { isHidden } from "../utils/isHidden";
import { useItemDrag } from "../utils/useItemDrag";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../state/AppStateContext";
import { addTask, moveList, moveTask, setDraggedItem } from "../state/actions";

interface Props {
  text: string;
  id: string;
  isPreview?: boolean;
}

const Column: React.FC<Props> = ({ id, text, isPreview }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { getTasksByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTasksByListId(id);

  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      } else {
        if (draggedItem.columnId === id) {
          return;
        }
        if (tasks.length) {
          return;
        }
        dispatch(moveTask(+draggedItem.id, 0, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    }),
  });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden({ id, itemType: "COLUMN", draggedItem })}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} columnId={id} />
      ))}
      <AddNewItem
        dark
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </ColumnContainer>
  );
};

export default Column;
