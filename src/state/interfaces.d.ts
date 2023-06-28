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

interface MoveTaskAction {
  type: "MOVE_TASK";
  payload: {
    dragIndex: number;
    hoveredItemId: number;
    sourceColumnId: string;
    targetColumnId: string;
  };
}

interface setDraggedItem {
  type: "SET_DRAGGED_ITEM";
  payload: DragItem | undefined;
}

export type ColumnDratItem = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type CardDragItem = {
  id: string;
  columnId: string;
  text: string;
  type: "CARD";
};

export type DragItem = ColumnDratItem | CardDragItem;

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | setDraggedItem
  | MoveTaskAction;
