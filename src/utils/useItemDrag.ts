import { useDrag } from "react-dnd";

import { setDraggedItem } from "../state/actions.ts";
import { useAppState } from "../state/AppStateContext";
import type { DragItem } from "../state/interfaces.d.ts";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(undefined)),
  });
  return { drag };
};
