import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { setDraggedItem } from "../state/actions.ts";
import { useAppState } from "../state/AppStateContext";
import type { DragItem } from "../state/interfaces.d.ts";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(undefined)),
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  });
  return { drag };
};
