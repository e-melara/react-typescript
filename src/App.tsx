import { AppContainer } from "./styles.ts";

import Column from "./components/Column";
import { addList } from "./state/actions.ts";
import AddNewItem from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext.tsx";
import { CustomDragLayer } from "./components/CustomDragLayer.tsx";

const App: React.FC = () => {
  const { lists, dispatch } = useAppState();
  return (
    <>
      <AppContainer>
        <CustomDragLayer />
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch(addList(text))}
        />
      </AppContainer>
    </>
  );
};

export default App;
