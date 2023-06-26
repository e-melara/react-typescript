import { createContext, FC, useContext } from "react";
import type { AppState, AppStateContextProps } from "../interfaces.d";

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appState: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn TypeScript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

const AppStateProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lists } = appState;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
