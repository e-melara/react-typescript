import { nanoid } from "nanoid";

import type { AppState } from "../interfaces";
import type { Action } from "./interfaces.d.ts";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";

export const appStateReducer = (
  state: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      state.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(state.lists, listId);
      state.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(state.lists, draggedId);
      const hoverIndex = findItemIndexById(state.lists, hoverId);
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      break;
    }
    case "SET_DRAGGED_ITEM": {
      state.draggedItem = action.payload;
      break;
    }
    case "MOVE_TASK": {
      const { dragIndex, hoveredItemId, sourceColumnId, targetColumnId } =
        action.payload;
      const sourceListIndex = findItemIndexById(state.lists, sourceColumnId);
      const targetListIndex = findItemIndexById(state.lists, targetColumnId);
      const item = state.lists[sourceListIndex].tasks.splice(dragIndex, 1)[0];
      state.lists[targetListIndex].tasks.splice(hoveredItemId, 0, item);
      break;
    }
  }
};
