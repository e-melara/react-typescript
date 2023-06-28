import { useRef } from "react";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";

import { useAppState } from "../state/AppStateContext";
import { isHidden } from "../utils/isHidden";
import { CardContainer } from "../styles";
import { useItemDrag } from "../utils/useItemDrag";
import { moveTask, setDraggedItem } from "../state/actions";

interface Props {
  id: string;
  text: string;
  columnId: string;
  isPreview?: boolean;
}

const Card: React.FC<Props> = ({ text, id, isPreview, columnId }) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId,
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type !== "CARD") return;
      if (draggedItem.id === id) return;

      dispatch(moveTask(+draggedItem.id, +id, draggedItem.columnId, columnId));
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    }),
  });

  drag(drop(ref));

  return (
    <CardContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden({ isPreview, id, draggedItem, itemType: "CARD" })}
    >
      {text}
    </CardContainer>
  );
};

export default Card;
