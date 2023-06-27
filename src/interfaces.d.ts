import { Dispatch } from "react";

import { Action } from "./state/actions";
import { DragItem } from "./state/interfaces";

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
  draggedItem: DragItem | undefined;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};
