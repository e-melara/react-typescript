import { ColumnContainer, ColumnTitle } from "../styles";

import Card from "./Card";
import AddNewItem from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";

interface Props {
  text: string;
  id: string;
}

const Column: React.FC<Props> = ({ id, text }) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        dark
        toggleButtonText="+ Add another task"
        onAdd={console.log}
      />
    </ColumnContainer>
  );
};

export default Column;
