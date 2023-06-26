import { AppContainer } from "./styles.ts";

import Column from "./components/Column";
import AddNewItem from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext.tsx";

const App: React.FC = () => {
  const { lists } = useAppState();
  return (
    <>
      <AppContainer>
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id} />
        ))}
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppContainer>
    </>
  );
};

export default App;
