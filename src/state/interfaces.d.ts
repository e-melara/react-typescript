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

interface setDraggedItem {
  type: "SET_DRAGGED_ITEM";
  payload: DragItem | undefined;
}

export type ColumnDratItem = {
  id: stirng;
  text: string;
  type: "COLUMN";
};

export type DragItem = ColumnDratItem;

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | setDraggedItem;
