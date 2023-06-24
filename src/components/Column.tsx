import { ColumnContainer, ColumnTitle } from "../styles";
import AddNewItem from "./AddNewItem";

interface Props {
  text: string;
  children?: React.ReactNode;
}

const Column: React.FC<Props> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        dark
        toggleButtonText="+ Add another task"
        onAdd={console.log}
      />
    </ColumnContainer>
  );
};

export default Column;
