interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

interface MoveListAction {
  type: "MOVE_LIST";
  payload: {
    draggedId: string;
    hoverId: string;
  };
}

interface setDraggedItemAction {
  type: "SET_DRAGGED_ITEM";
  payload: DragItem | null;
}

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | setDraggedItemAction;
