import Card from "./Card";
import AddNewItem from "./AddNewItem";
import { useItemDrag } from "../utils/useItemDrag";
import { addTask } from "../state/actions";
import { ColumnContainer, ColumnTitle } from "../styles";
import { useAppState } from "../state/AppStateContext";

interface Props {
  text: string;
  id: string;
}

const Column: React.FC<Props> = ({ id, text }) => {
  const { getTasksByListId, dispatch } = useAppState();
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
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </ColumnContainer>
  );
};

export default Column;
