import { Dispatch } from "react";

import { Action } from "./state/actions";

export type ColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type DragItem = ColumnDragItem;
export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | undefined;
};

export type AppStateContextProps = {
  lists: List[];
  draggedItem: DragItem | undefined;
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};
